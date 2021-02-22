'use strict'
const Exercise = use("App/Models/Exercise")
const Helpers = use("Helpers")

class ExerciseController {

    async index({request}){
        console.log(request.all())
        return await Exercise.all()
    }

    async show({ params }){
        const exercise = await Exercise.findOrFail(params.id)
        return exercise
    }


    async store({ request }){
        const data = request.only([
            "name",
            "observation",
            "series",
            "waiting_time"
        ])

        const photo = request.file('image', {
            types: ['image'],
            size: '2mb'
        })

        if(photo) {
            const image = await Exercise.findBy('url_image', photo.clientName)
            if(image){
                return Response.status(400).send({error:{
                    message: 'Imagem com nome duplicado',
                    name: 'DuplicatedImage'
                }})
            }

            await photo.move(Helpers.publicPath('exercises'))
            data.url_image = photo.clientName
        }

        const exercise = await Exercise.create(data)
        return exercise
    }

    async update({ params, request }){
        const data = request.only([
            "name",
            "observation",
            "series",
            "waiting_time"
        ])

        const exercise = await Exercise.findOrFail(params.id)
        exercise.merge(data)
        await exercise.save()
        return exercise
    }

    async destroy({ params }){
        const exercise = await Exercise.findOrFail(params.id)
        return await exercise.delete()

    }

}

module.exports = ExerciseController
