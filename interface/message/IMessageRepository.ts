import { MessageRequest } from "../../entities/MessageRequest";
import { MessageResponse } from "../../entities/MessageResponse";

export interface IMessageRepository{
    createMessageRequest(MessageRequest: MessageRequest): Promise<string>;
    getMessageResponse(MessageResponse: MessageResponse): Promise<MessageResponse>;
}