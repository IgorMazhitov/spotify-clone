import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"



    const start =async () => {
        try {

            const PORT = process.env.PORT || 3000
            const app = NestFactory.create(AppModule)
            ;(await app).enableCors()
            ;(await app).listen(PORT, () => console.log(`server started on ${PORT}`))

        } catch (error) {
            console.log(error)
        }
    }

    start()