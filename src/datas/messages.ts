export interface IBaseMessages {
    id: number
    message: string
    from: string
    to: string
    at: Date
    reply_on_id: number | null
}

export interface IMessages extends IBaseMessages {
    friend_id: number
}
