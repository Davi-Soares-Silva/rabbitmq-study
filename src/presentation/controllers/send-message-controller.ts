import { Controller, HttpRequest, HttpResponse } from "../protocols";
import { SendMessage } from '../../domain/usecases/send-message';

export class SendMessageController implements Controller {
  constructor(
    private readonly sendMessage: SendMessage
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      await this.sendMessage.send(httpRequest.body);

      return {
        statusCode: 200,
        body: {
          message: 'Mensagem encaminhada com sucesso!',
          payload: {},
          errors: []
        }
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: {}
      }
    }
  }
}