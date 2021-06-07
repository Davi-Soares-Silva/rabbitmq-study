import { server } from './application';

(async () => {
  try {
    server.listen(3333, async () => {
      console.log(`Server is running on port: 3333`);
    });
  } catch (error) {
    console.log(error);
  }
})();
