export interface IBaseMessages {
    id: number
    message: string
    from_user: string
    to_user: string
    date_at: Date
    reply_on_id: number | null
}

export interface IMessages extends IBaseMessages {
    friend_id: number
}

export interface IReturnOfService {
    statusCode: number
    statusMsg: string
}
