import express from 'express'
import 'reflect-metadata'
import messageRouter from './routes/messageRouter';

const app = express();
app.use(express.json());



const PORT = 3000;

app.use(messageRouter);


app.listen(PORT, () => {
    console.log(`App listening on: http://localhost:${PORT}`);
})
