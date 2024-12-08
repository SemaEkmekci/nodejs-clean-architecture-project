import { MessageRequest } from "../entities/MessageRequest";
import { MessageResponse } from "../entities/MessageResponse";
import { IMessageRepository } from "../interface/message/IMessageRepository";

export class MessageRepository implements IMessageRepository{


    async createMessageRequest(MessageRequest: MessageRequest): Promise<string> {
        console.log("MessageRequest",MessageRequest);
        return "Success";
    }

    async getMessageResponse(MessageResponse: MessageResponse): Promise<MessageResponse> {
        console.log("MessageResponse",MessageResponse);
        return "Success";
    }

}