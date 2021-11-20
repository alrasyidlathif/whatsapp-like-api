import {Request, Response} from 'express'

class MessageController{
    async sendMessage(req: Request, res: Response): Promise<Response> {
        return res.send('send message')
    }
    async getMessages(req: Request, res: Response): Promise<Response> {
        return res.send('get message')
    }
    async getAllMessages(req: Request, res: Response): Promise<Response> {
        return res.send('get all message')
    }
}

export default new MessageController()
