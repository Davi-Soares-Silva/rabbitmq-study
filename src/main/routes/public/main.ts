import { adaptRoute } from '../../adapters/adaptRoute';
import { Router } from 'express';
import { makeSendMessageController } from '../../factories/controllers/make-send-message-controller';

export default (routes: Router) => {
  routes.post(
    '/main',
    adaptRoute(makeSendMessageController()),
  )
}