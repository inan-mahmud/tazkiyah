import { Router, Request, Response } from 'express';

const router = Router();

router.get('/today', (req: Request, res: Response) => {
    res.json({
        date: new Date().toISOString().split('T')[0],
        ayah: 'Coming soon ...',
        tip: 'Coming soon....',
    });
});

export default router;