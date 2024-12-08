import { injectable } from "inversify";
import { MessageRequest } from "../entities/MessageRequest";
import { MessageResponse } from "../entities/MessageResponse";
import { IMessageInteractor } from "../interface/message/IMessageInteractor";

@injectable()
export class MessageInteractor implements IMessageInteractor{


    async createMessageRequest(MessageRequest: MessageRequest): Promise<string> {
    return "INTERACTOR";    
    }
    async getMessageResponse(MessageResponse: MessageResponse): Promise<MessageResponse> {
        return "INTERACTOR";  
    }

}