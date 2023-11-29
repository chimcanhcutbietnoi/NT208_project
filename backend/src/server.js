import express from 'express'
import cors from 'cors'; 
import foodRouter from './routers/food.router.js'
import userRouter from './routers/user.router.js'
import dotenv from 'dotenv'
import { dbconnect } from './config/database.config.js';
import oderRouter from './routers/order.router.js'
import {fileURLToPath} from 'url';
import path, { dirname } from 'path';
dotenv.config();
dbconnect();

const __fileName = fileURLToPath(import.meta.url);
const __dirname =  dirname(__fileName);

const app = express(); 
app.use(express.json()); // app use file json  to analyze 
app.use(
    cors(
        {
            credentials: true, 
            origin: ['http://localhost:3000']
        }
    )
)

app.use('/api/foods', foodRouter); 

app.use('/api/users', userRouter); 

app.use('/api/orders', oderRouter);

const publicFolder = path.join(__dirname,'public');
app.use(express.static(publicFolder));
app.get('*', (req, res) => {
    const indexFilePath = path.join(publicFolder, 'index.html');
    res.sendFile(indexFilePath);
});

const PORT = 5000; 
app.listen(PORT, () => {
    console.log('server listening on port '+ PORT); 
    console.log(process.env.MONGO_URI)
});