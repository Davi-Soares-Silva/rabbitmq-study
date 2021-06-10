import { Channel, connect, Connection, Message } from "amqplib";

export class RabbitMqServer {
  private connection!: Connection;
  private channel!: Channel;

  constructor(private readonly uri: string) {}

  public async start() {
    this.connection = await connect(this.uri);
    this.channel = await this.connection.createChannel();
  }

  public async publishInQueue(queue: string, message: object) {
    return this.channel.sendToQueue(queue, this.messageToBuffer(message));
  }

  private messageToBuffer(message: object): Buffer {
    const string = JSON.stringify(message);
    return Buffer.from(string);
  }

  private messageToJson(message: Message) {
    return JSON.parse(message.content.toString());
  }

  public consume(queue: string, callback: (message: object) => void)  {
    this.channel.consume(queue, (message) => {
      if (!message) return;

      callback(this.messageToJson(message));
      this.channel.ack(message);
    })
  }
}
