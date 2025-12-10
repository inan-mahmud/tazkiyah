import { Router, Request, Response } from 'express';

const router = Router();

router.get('/me', (req: Request, res: Response) => {
    res.json({
        message: 'User profile endpoint requires authentication'
    });
});

export default router;