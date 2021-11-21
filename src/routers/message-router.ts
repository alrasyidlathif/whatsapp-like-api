import BaseRouter from './base-router'
import messageController from '../controllers/message-controller'

class UserRouter extends BaseRouter {
    public routes(): void {
        this.router.post('/:user_id1/to/:user_id2', messageController.sendMessage)
        this.router.get('/:user_id1/and/:user_id2', messageController.getMessages)
        this.router.get('/:user_id1', messageController.getAllMessages)
    }
}

export default new UserRouter().router
