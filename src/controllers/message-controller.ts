import {Request, Response} from 'express'
import messageModel from '../models/message-model'
import IModel from '../models/model-interface'

class MessageController{
    private model: IModel
    constructor(model: IModel) {
        this.model = model
    }

    public sendMessage = async (req: Request, res: Response): Promise<Response> => {
        const sender: string = req.params.sender_id
        const receiver: string = req.params.receiver_id
        if (sender === receiver) {
            return res.status(400).send('both sender and receiver are equal')
        }
        const message: string = req.body.message
        const repliedId: number | null = req.body.reply_on_id
        try {
            const result = await this.model.postMessage(sender, receiver, message, repliedId)
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
        if (userId1 === userId2) {
            return res.status(400).send('both user id are equal')
        }
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
