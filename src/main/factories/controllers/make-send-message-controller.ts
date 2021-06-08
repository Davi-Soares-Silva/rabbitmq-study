import { SendMessageController } from "../../../presentation/controllers/send-message-controller";
import { MessageAmqpRepository } from '../../../infra/amqp/message-amqp-repository';

export const makeSendMessageController = () => {
  const messageAmqpRepository = new MessageAmqpRepository();
  return new SendMessageController(messageAmqpRepository);
}