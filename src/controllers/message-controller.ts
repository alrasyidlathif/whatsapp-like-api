import {Request, Response} from 'express'
import messageModel from '../models/message-model'
import IModel from '../models/model-interface'

class MessageController{
    private model: IModel
    constructor(model: IModel) {
        this.model = model
    }

    public sendMessage = async (req: Request, res: Response): Promise<Response> => {
        const userId1: string = req.params.user_id1
        const userId2: string = req.params.user_id2
        const message: string = req.body.message
        const repliedId: number | null = req.body.reply_on_id ? req.body.reply_on_id : null
        try {
            const result = await this.model.postMessage(userId1, userId2, message, repliedId)
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
        const userId1: string = req.params.user_id1
        const userId2: string = req.params.user_id2
        try {
            const result = await this.model.fetchMessage(userId1, userId2)
            return res.status(200).send(result)
        } catch (error) {
            console.log(error)
            return res.status(500).send('error')
        }
    }

    public getAllMessages = async (req: Request, res: Response): Promise<Response> => {
        const userId1: string = req.params.user_id1
        try {
            const result = await this.model.fetchAllMessage(userId1)
            return res.status(200).send(result)
        } catch (error) {
            console.log(error)
            return res.status(500).send('error')
        }
    }
}

export default new MessageController(messageModel)
