import express from "express";
import { Container } from "inversify";
import { IMessageInteractor } from "../interface/message/IMessageInteractor";
import { INTERFACE_TYPE } from "../utils";
import { MessageInteractor } from "../interactors/messageInteractor";
import { MessageRepository } from "../repository/messageRepository";
import { MessageController } from "../controller/messageController";

const messageRouter = express.Router();

const container = new Container();

container
  .bind<IMessageInteractor>(INTERFACE_TYPE.MessageInteractor)
  .to(MessageInteractor);
container
  .bind<IMessageInteractor>(INTERFACE_TYPE.MessageRepository)
  .to(MessageRepository);
container.bind(INTERFACE_TYPE.MessageController).to(MessageController);
const controller = container.get<MessageController>(
  INTERFACE_TYPE.MessageController
);

messageRouter.get(
    "/messages",
    async (req, res, next) => {
      try {
        await controller.onGetMessageResponse(req, res, next);
      } catch (error) {
        next(error);
      }
    }
  );
  
export default messageRouter;
