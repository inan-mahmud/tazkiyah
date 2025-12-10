import { Router, Request, Response } from 'express';

const router = Router();

router.get('/status', (req: Request, res: Response) => {
    res.json({ authenticated: false, message: "Auth is not implemented yet"});
});

export default router;