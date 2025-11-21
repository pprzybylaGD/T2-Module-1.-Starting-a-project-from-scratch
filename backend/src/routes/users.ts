import express, { Router, Request, Response } from 'express';
import User from '../models/User';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Unknown error';
    res.status(400).json({ error });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Unknown error';
    res.status(400).json({ error });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error });
  }
});

export default router;
