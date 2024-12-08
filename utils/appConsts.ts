import { MessageController } from "../controller/messageController";
import { MessageInteractor } from "../interactors/messageInteractor";
import { MessageRepository } from "../repository/messageRepository";

export const INTERFACE_TYPE = {
  MessageInteractor: Symbol.for("IMessageInteractor"),
  MessageRepository: Symbol.for("IMessageRepository"),
  MessageController:Symbol.for("MessageController")
};
