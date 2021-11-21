import { IResult } from 'mssql'
import {IBaseMessages, IMessages} from '../datas/messages'

interface IModel {
    fetchMessage(userId1: string, userId2: string): Promise<IResult<IBaseMessages>>
    fetchAllMessage(userId: string): Promise<IMessages>
    postMessage(sender: string, receiver: string): Promise<Boolean>
}

export default IModel