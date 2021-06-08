import { server } from './application';
import { AmqpHelper } from '../infra/amqp/helpers/connection'

(async () => {
  try {
    await AmqpHelper.startConnection('amqp://guest:guest@172.17.0.4:5672');
    server.listen(3333, async () => {
      console.log('Server is running on port: 3333');
    });
  } catch (error) {
    console.log(error);
  }
})();
