import BaseRouter from './base-router'
import messageController from '../controllers/message-controller'
import messageMiddleware from '../middlewares/message-middleware'

class UserRouter extends BaseRouter {
    public routes(): void {
        this.router.post('/:user_id1/to/:user_id2', 
            messageMiddleware.isUserParamNotEqual, messageMiddleware.isBodyValid, 
            messageController.sendMessage
        )
        this.router.get('/:user_id1/and/:user_id2', 
            messageMiddleware.isUserParamNotEqual, messageController.getMessages
        )
        this.router.get('/:user_id1', messageController.getAllMessages)
    }
}

export default new UserRouter().router
