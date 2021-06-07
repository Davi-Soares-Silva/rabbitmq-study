interface TokenData {}

declare module Express {
  export interface Request {
    token: TokenData;
  }
}
