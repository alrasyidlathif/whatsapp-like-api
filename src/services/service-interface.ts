import {IReturnOfService} from '../datas/messages'

interface IService {
    postMessage(sender: string, receiver: string, message: string, repliedId: number | null): Promise<IReturnOfService>
    fetchAllMessage(userId: string): Promise<IReturnOfService>
}

export default IService
