import {Request, Response} from 'express'
import messageModel from '../models/message-model'
import messageService from '../services/message-service'
import IModel from '../models/model-interface'
import IService from '../services/service-interface'
import { IReturnOfService } from '../datas/messages'

class MessageController{
    private model: IModel
    private service: IService
    constructor(model: IModel, service: IService) {
        this.model = model
        this.service = service
    }

    public sendMessage = async (req: Request, res: Response): Promise<Response> => {
        const userId1: string = req.params.user_id1
        const userId2: string = req.params.user_id2
        const message: string = req.body.message
        const repliedId: number | null = req.body.reply_on_id ? req.body.reply_on_id : null
        try {
            const result: IReturnOfService = await this.service.postMessage(userId1, userId2, message, repliedId)
            return res.status(result.statusCode).send(result.statusMsg)
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

export default new MessageController(messageModel, messageService)
