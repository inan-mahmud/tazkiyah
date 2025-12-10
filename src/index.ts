import express, { Request, Response } from 'express';
import authRoutes from './routes/auth.routes.js';
import feedRoutes from './routes/feed.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();
const port = "3000";

app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.json({message: "Tazkiya API is running"});
});

app.use('/api/auth', authRoutes);
app.use('/api/feed', feedRoutes);
app.use('/api/users', userRoutes); 



app.listen(port, () => {
    console.log(`Server running at  http://localhost:${port}`);
});