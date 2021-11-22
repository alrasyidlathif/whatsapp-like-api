import { IMessages, IMultiMessages } from "../datas/messages";
import IHelper from "./helper-interface";

class MessageHelper implements IHelper {
    restructureAllMessageData(userId: string, allMessageData: IMessages[]): IMultiMessages[] {
        const newDatas: IMultiMessages[] = []
        const tags = [...new Set(allMessageData.map(msg => msg.friend_id))]
        for (let tag of tags) {
            newDatas.push({
                user_tag: userId + '-' + tag,
                messages: allMessageData.filter(msg => msg.friend_id === tag)
            })
        }
        return newDatas
    }
}

export default new MessageHelper()
