import express from 'express';
import 'dotenv/config';
import propertiesRouter from './src/routes/properties.routes.js';
import userRouter from './src/routes/user.routes.js';

const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(express.json());
app.use(propertiesRouter);
app.use(userRouter);

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));