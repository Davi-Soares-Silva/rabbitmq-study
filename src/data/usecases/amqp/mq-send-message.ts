import { SendMessage } from "../../../domain/usecases/send-message";
import { SendMessageRepository } from "../../protocols/amqp/send-message-repository";

export class MqSendMessage implements SendMessage {
  constructor(
    private readonly sendMessageRepository: SendMessageRepository
  ) {}

  async send(params: SendMessage.Params) {
    await this.sendMessageRepository.send(params);
  };
}