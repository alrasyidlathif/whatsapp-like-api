import express, {Application, Request, Response} from 'express'
import config from './configs/env-config'

class App {
    public app: Application

    constructor() {
        this.app = express()
        this.plugins()
        this.routes()
    }

    protected plugins(): void {
        this.app.use(express.urlencoded({extended: false}))
        this.app.use(express.json())
    }

    protected routes(): void {
        this.app.route('/').get((req: Request, res: Response) => {
            res.send(`welcome to whatsapp like api!`)
        })
    }
}

const app = new App().app
const port: number = Number(config.PORT)

app.listen(port, () => {
    console.log(`listen to port ${port}`)
})