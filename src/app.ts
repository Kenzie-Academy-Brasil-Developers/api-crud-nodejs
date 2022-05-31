import express from 'express';
import userRouter from './routers/user.routes';
import loginRouter from './routers/login.routes';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/login', loginRouter);

app.listen(3000, () => console.log('server is running'));

export default app;
