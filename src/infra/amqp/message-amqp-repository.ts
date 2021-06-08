import { SendMessageRepository } from "../../data/protocols/amqp/send-message-repository";
import { AmqpHelper } from './helpers/connection';

export class MessageAmqpRepository implements SendMessageRepository {
  async send(params: SendMessageRepository.Params): SendMessageRepository.Result {

    await AmqpHelper.publishInExchange('amq.direct', 'rota', JSON.stringify(params));
  }
}