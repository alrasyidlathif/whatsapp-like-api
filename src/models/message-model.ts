import { IBaseMessages, IMessages } from "../datas/messages"
import IModel from "./model-interface"
import db from '../databases/db'
import { IResult } from "mssql"

class MessageModel implements IModel {
    async fetchMessage(userId1: string, userId2: string): Promise<IBaseMessages[]> {
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
            return result.recordset
        } catch (error: any) {
            throw new Error(error)
        }
    }

    async fetchAllMessage(userId: string): Promise<IMessages[]> {
        try {
            await db.getPoolConnect()
            const request = db.getPool().request()
            request.input('userId', userId)
            const result: IResult<IMessages> = await request.query(`
                SELECT *,
                CASE
                    WHEN (@userId = from_user) THEN to_user
                    ELSE from_user
                END
                AS friend_id
                FROM MESSAGES
                WHERE from_user = @userId OR to_user = @userId
                ORDER BY friend_id, date_at DESC
            `)
            return result.recordset
        } catch (error: any) {
            throw new Error(error)
        }
    }

    async postMessage(sender: string, receiver: string, message: string, repliedId: number | null): 
    Promise<number> {
        try {
            await db.getPoolConnect()
            const request = db.getPool().request()
            request.input('sender', sender)
            request.input('receiver', receiver)
            request.input('message', message)
            request.input('repliedId', repliedId)
            const result: IResult<IMessages> = await request.query(`
                INSERT INTO MESSAGES (message, from_user, to_user, date_at, reply_on_id) 
                VALUES (@message, @sender, @receiver, GETDATE(), @repliedId)
            `)
            return result.rowsAffected[0]
        } catch (error: any) {
            throw new Error(error)
        }
    }

    async fetchMessageWithId(userId1: string, userId2: string, msgId: number): Promise<number> {
        try {
            await db.getPoolConnect()
            const request = db.getPool().request()
            request.input('userId1', userId1)
            request.input('userId2', userId2)
            request.input('msgId', msgId)
            const result: IResult<IBaseMessages> = await request.query(`
                SELECT * FROM MESSAGES
                WHERE ((from_user = @userId1 AND to_user = @userId2) OR
                    (from_user = @userId2 AND to_user = @userId1))
                    AND id = @msgId
            `)
            return result.rowsAffected[0]
        } catch (error: any) {
            throw new Error(error)
        }
    }
}

export default new MessageModel()
