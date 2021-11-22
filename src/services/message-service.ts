import IService from "./service-interface"
import { IReturnOfService } from "../datas/messages"
import IModel from "../models/model-interface"
import messageModel from '../models/message-model'

class MessageService implements IService {
    private model: IModel
    constructor(model: IModel) {
        this.model = model
    }

    public postMessage = async (
        sender: string, receiver: string, message: string, repliedId: number | null): 
    Promise<IReturnOfService> => {
        try {
            if (repliedId) {
                const isValidRepliedId = await this.model.fetchMessageWithId(sender, receiver, repliedId)
                if (isValidRepliedId < 1) {
                    return {statusCode: 400, statusMsg: 'invalid replied id'}
                }
            }
            const result = await this.model.postMessage(sender, receiver, message, repliedId)
            if (result < 1) {
                return {statusCode: 500, statusMsg: 'no row inserted'}
            }
            return {statusCode: 200, statusMsg: 'OK'}
        } catch (error: any) {
            throw new Error(error)
        }
    }
}

export default new MessageService(messageModel)
