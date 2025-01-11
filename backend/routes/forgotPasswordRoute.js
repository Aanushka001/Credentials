import express from 'express';
import User from '../models/User';

const router = express.Router();

router.post('/check-email', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      return res.json({ exists: true });
    } else {
      return res.json({ exists: false });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to check email' });
  }
});

export default router;
