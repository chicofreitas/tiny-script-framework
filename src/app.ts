import ClientHandler from "./core/client-handler";
import handlers from './handlers';

const client = new ClientHandler(handlers);
client.run("SIMPLE");