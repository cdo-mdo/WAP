import express, { RequestHandler } from 'express';
const app = express();

const requestHandler: RequestHandler = function(request, response) {
    response.status(200).json({ msg: `Welcome my dears` })
}

app.get('*', requestHandler);
app.listen(3000, () => console.log('The server is running'));
