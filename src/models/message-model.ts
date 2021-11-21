import { IBaseMessages, IMessages } from "../datas/messages"
import IModel from "./model-interface"
import db from '../databases/db'
import { IResult } from "mssql"

class MessageModel implements IModel {
    async fetchMessage(userId1: string, userId2: string): Promise<IResult<IBaseMessages>> {
        try {
            await db.getPoolConnect()
            const request = db.getPool().request()
            request.input('userId1', userId1)
            request.input('userId2', userId2)
            const result: IResult<IBaseMessages> = await request.query(`
                SELECT * FROM MESSAGES
                WHERE (from_user = @userId1 AND to_user = @userId2) OR
                    (from_user = @userId2 AND to_user = @userId1)
                ORDER BY date_at DESC
            `)
            return result
        } catch (error: any) {
            throw new Error(error)
        }
    }

    fetchAllMessage(userId: string): Promise<IMessages> {
        throw new Error("Method not implemented.");
    }
    
    postMessage(sender: string, receiver: string): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
}