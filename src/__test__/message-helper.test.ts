import messageHelper from "../helpers/message-helper"

const MSGDATA = [
    {
        "id": 4,
        "message": "ping",
        "from_user": "a",
        "to_user": "c",
        "date_at": new Date("2021-11-21T20:08:00.300Z"),
        "reply_on_id": null,
        "friend_id": "a"
    },
    {
        "id": 12,
        "message": "heh opo?",
        "from_user": "b",
        "to_user": "c",
        "date_at": new Date("2021-11-22T10:07:03.230Z"),
        "reply_on_id": 11,
        "friend_id": "b"
    },
    {
        "id": 11,
        "message": "iya broo, whatsup?",
        "from_user": "c",
        "to_user": "b",
        "date_at": new Date("2021-11-22T08:57:37.320Z"),
        "reply_on_id": 10,
        "friend_id": "b"
    },
    {
        "id": 10,
        "message": "halo broo",
        "from_user": "c",
        "to_user": "b",
        "date_at": new Date("2021-11-22T07:58:46.730Z"),
        "reply_on_id": null,
        "friend_id": "b"
    }
]
const MSGDATANEW = [
    {
        "user_tag": "c-a",
        "messages": [
            {
                "id": 4,
                "message": "ping",
                "from_user": "a",
                "to_user": "c",
                "date_at": new Date("2021-11-21T20:08:00.300Z"),
                "reply_on_id": null,
                "friend_id": "a"
            }
        ]
    },
    {
        "user_tag": "c-b",
        "messages": [
            {
                "id": 12,
                "message": "heh opo?",
                "from_user": "b",
                "to_user": "c",
                "date_at": new Date("2021-11-22T10:07:03.230Z"),
                "reply_on_id": 11,
                "friend_id": "b"
            },
            {
                "id": 11,
                "message": "iya broo, whatsup?",
                "from_user": "c",
                "to_user": "b",
                "date_at": new Date("2021-11-22T08:57:37.320Z"),
                "reply_on_id": 10,
                "friend_id": "b"
            },
            {
                "id": 10,
                "message": "halo broo",
                "from_user": "c",
                "to_user": "b",
                "date_at": new Date("2021-11-22T07:58:46.730Z"),
                "reply_on_id": null,
                "friend_id": "b"
            }
        ]
    }
]

describe('unit test restructureAllMessageData function', () => {
    it('should result with an empty array', () => {
        return expect(messageHelper.restructureAllMessageData('', [])).toEqual([])
    })
    it('should result OK', () => {
        return expect(messageHelper.restructureAllMessageData('c', MSGDATA)).toEqual(MSGDATANEW)
    })
})
