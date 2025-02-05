/// Import require modules
import express, { json, RequestHandler } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { join } from 'path';
import ls, { get, set } from 'node-localstorage';
import router from './routes/contactRoutes';

/// Initialize express app
const app = express();
const port = 3000;

// Initialize node-localstorage
// const appLocalStorage = new LocalStorage('./data');


/// Configuration
app.set('port', process.env.PORT || port);
app.use(cors());
app.use(morgan("dev"));

/// Middleware
app.use('/contacts', router);

app.get('/', (req, res) => {
    res.send('Welcome to Contact Application');
})

app.listen(3000, () => console.log('The server is running'));

