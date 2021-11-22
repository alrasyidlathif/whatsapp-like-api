import { Request, Response, NextFunction } from "express"

class MessageMiddleware {
    private USERID1: string = 'user_id1'
    private USERID2: string = 'user_id2'

    isUserParamNotEqual = (req: Request, res: Response, next: NextFunction): Response | void => {
        if (req.params[this.USERID1] === req.params[this.USERID2]) {
            return res.status(400).send('both user id can not equal')
        }
        return next()
    }

    isBodyValid(req: Request, res: Response, next: NextFunction): Response | void {
        if (typeof req.body.message !== 'string') {
            return res.status(400).send('invalid body')
        }
        if (req.body.reply_on_id) {
            if (typeof req.body.reply_on_id !== 'number') {
                return res.status(400).send('invalid body')
            }
        }
        return next()
    }
}

export default new MessageMiddleware()
