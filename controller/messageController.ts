import { injectable, inject } from "inversify";
import { IMessageInteractor } from "../interface/message/IMessageInteractor";
import { INTERFACE_TYPE } from "../utils";
import { NextFunction, Request, Response } from "express";

@injectable()
export class MessageController {
  private interactor: IMessageInteractor;

  constructor(
    @inject(INTERFACE_TYPE.MessageInteractor) interactor: IMessageInteractor
  ) {
    this.interactor = interactor;
  }

  async onCreateMessageRequest(req: Request, res: Response, next: NextFunction){
    console.log("req:", req);
    try {
      const result = await this.interactor.createMessageRequest(req);
    } catch (error) {
      return res.status(400).json({
        message: "Hata",
      });
    }
    return res.status(500).json({ req });
  }

  async onGetMessageResponse(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.interactor.createMessageRequest(req);
      res.status(200).json(result); // Sadece gerekli sonucu döndür
    } catch (error) {
      console.error(error);
      res.status(400).json({
        message: "Hata",
        error: error 
      });
    }
  }
  
}
