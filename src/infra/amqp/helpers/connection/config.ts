import { Channel, connect, Connection } from "amqplib";

export const AmqpHelper = {
  connection: null as Connection,
  channel: null as Channel,

  async startConnection(uri: string): Promise<void> {
    this.connection = await connect(uri);
    this.channel = await this.connection.createChannel();
  },

  async publishInExchange(
    exchange: string,
    routingKey: string,
    message: string
  ): Promise<void> {
    return this.channel.publish(exchange, routingKey, Buffer.from(message));
  }
}