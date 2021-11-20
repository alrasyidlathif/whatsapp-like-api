import BaseRouter from './base-router'

class UserRouter extends BaseRouter {
    public routes(): void {
        this.router.post('/:sender_id/to/:receiver_id', )
        this.router.get('/:user_id1/and/:user_id2', )
        this.router.get('/:user_id1', )
    }
}

export default new UserRouter().router