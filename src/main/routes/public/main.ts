import { adaptRoute } from '../../adapters/adaptRoute';
import { Router } from 'express';
import { makeMainController } from '../../../main/factories/controllers/make-main-controller';

export default (routes: Router) => {
  routes.post(
    '/main',
    adaptRoute(makeMainController()),
  )
}