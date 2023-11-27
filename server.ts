import express from 'express';
import MainRouter from './Routes/MainRoutes';
import UserRouter from './Routes/UserRoutes';


const app = express();
app.use(express.json());

app.use(MainRouter);
app.use(UserRouter);


app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000");
})