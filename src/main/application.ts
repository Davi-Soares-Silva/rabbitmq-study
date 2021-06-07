import cors from 'cors';
import express from 'express';
import setupPublicRoutes from '../main/config/public-routes';

const server = express();

server.use(cors({ exposedHeaders: 'X-Total-Count' }));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

setupPublicRoutes(server);

export { server };
