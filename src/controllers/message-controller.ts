import {Request, Response} from 'express'
import messageModel from '../models/message-model'
import IModel from '../models/model-interface'

class MessageController{
    private model: IModel
    constructor(model: IModel) {
        this.model = model
    }

    public sendMessage = async (req: Request, res: Response): Promise<Response> => {
        try {
            const result = await this.model.postMessage('a', 'b', 'test dari API nih', null)
            if (result < 1) {
                return res.status(500).send('no row inserted')
            }
            return res.status(200).send('OK')
        } catch (error) {
            console.log(error)
            return res.status(500).send('error')
        }
    }

    public getMessages = async (req: Request, res: Response): Promise<Response> => {
        try {
            const result = await this.model.fetchMessage('a','b')
            return res.status(200).send(result)
        } catch (error) {
            console.log(error)
            return res.status(500).send('error')
        }
    }

    public getAllMessages = async (req: Request, res: Response): Promise<Response> => {
        try {
            const result = await this.model.fetchAllMessage('a')
            return res.status(200).send(result)
        } catch (error) {
            console.log(error)
            return res.status(500).send('error')
        }
    }
}

export default new MessageController(messageModel)
