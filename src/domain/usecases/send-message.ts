export interface SendMessage {
  send: (params: SendMessage.Params) => Promise<void>;
}

export namespace SendMessage {
  export type Params = {
    sender: string;
    receiver: string;
    message: string;
  }
}