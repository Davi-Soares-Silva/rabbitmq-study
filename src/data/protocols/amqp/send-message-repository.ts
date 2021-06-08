export interface SendMessageRepository {
  send(params: SendMessageRepository.Params): SendMessageRepository.Result
}

export namespace SendMessageRepository {
  export type Params = {
    sender: string;
    receiver: string;
    message: string;
  }

  export type Result = Promise<void>;
}