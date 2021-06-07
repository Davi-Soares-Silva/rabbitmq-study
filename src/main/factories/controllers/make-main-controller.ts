import { MainController } from "../../../presentation/controllers/main-controller";

export const makeMainController = () => {
  return new MainController('amqp://guest:guest@172.17.0.4:5672');
}