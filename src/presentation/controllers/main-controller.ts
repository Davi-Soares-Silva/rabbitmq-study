import { Channel, connect, Connection } from "amqplib";
import { Controller, HttpRequest, HttpResponse } from "../protocols";

export class MainController implements Controller {
  private conn: Connection;
  private channel: Channel;

  constructor(
    private uri: string
  ) {}

  async handle(httpRequest: HttpRequest){
    await this.start();
  }

  async start(): Promise<void> {
    this.conn = await connect(this.uri);
    this.channel = await this.conn.createChannel();
  }
}