import express from 'express';
import {productsManager} from './managers/products-des.js';
import { error } from 'console';
import { errorHandler } from './middlewares/error-handler.js';
import { cartsManager } from './managers/carts-des.js';
import productRouter from './routes/products-router.js';
import cartRouter from './routes/carts-router.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);    
app.use(errorHandler);
app.listen(8080, () => console.log('Server is running on port 8080'));
