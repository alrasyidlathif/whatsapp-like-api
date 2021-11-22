import {IMessages, IMultiMessages} from '../datas/messages'

interface IHelper {
    restructureAllMessageData(userId: string, allMessageData: IMessages[]): IMultiMessages[]
}

export default IHelper
