import { IBaseMessages, IMessages } from "../datas/messages"
import IModel from "./model-interface"
import db from '../databases/db'

class MessageModel implements IModel {
    async fetchMessage(userId1: string, userId2: string): Promise<IBaseMessages> {
        throw new Error("Method not implemented.");
    }
    fetchAllMessage(userId: string): Promise<IMessages> {
        throw new Error("Method not implemented.");
    }
    postMessage(sender: string, receiver: string): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
}