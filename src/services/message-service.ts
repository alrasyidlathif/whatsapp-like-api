import IService from "./service-interface"
import { IReturnOfService } from "../datas/messages"
import IModel from "../models/model-interface"
import messageModel from '../models/message-model'
import IHelper from "../helpers/helper-interface"
import messageHelper from "../helpers/message-helper"

class MessageService implements IService {
    private model: IModel
    private helper: IHelper
    constructor(model: IModel, helper: IHelper) {
        this.model = model
        this.helper = helper
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

    public fetchAllMessage = async (userId: string): Promise<IReturnOfService> => {
        try {
            const allMessageData = await this.model.fetchAllMessage(userId)
            const result = this.helper.restructureAllMessageData(userId, allMessageData)
            return {statusCode: 200, statusMsg: 'OK', data: result}
        } catch (error: any) {
            throw new Error(error)
        }
    }
}

export default new MessageService(messageModel, messageHelper)
