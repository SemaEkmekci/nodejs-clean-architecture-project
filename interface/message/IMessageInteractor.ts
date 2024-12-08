import { MessageRequest } from "../../entities/MessageRequest";
import { MessageResponse } from "../../entities/MessageResponse";

export interface IMessageInteractor{
    createMessageRequest(MessageRequest: MessageRequest): Promise<string>;
    getMessageResponse(MessageResponse: MessageResponse): Promise<MessageResponse>;
}