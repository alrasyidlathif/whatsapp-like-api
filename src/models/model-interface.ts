import {IBaseMessages, IMessages} from '../datas/messages'

interface IModel {
    fetchMessage(userId1: string, userId2: string): Promise<IBaseMessages[]>
    fetchAllMessage(userId: string): Promise<IMessages[]>
    postMessage(sender: string, receiver: string, message: string, repliedId: number | null): Promise<number>
    fetchMessageWithId(userId1: string, userId2: string, msgId: number): Promise<number>
}

export default IModel
