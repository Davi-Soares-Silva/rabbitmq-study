import { SendMessageRepository } from "../../data/protocols/amqp/send-message-repository";

export class MessageAmqpRepository implements SendMessageRepository {
  async send(params: SendMessageRepository.Params): SendMessageRepository.Result {
    
  }
}