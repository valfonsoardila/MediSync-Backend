import {Router} from 'express';
import {signup, signin, logout} from '../controllers/auth.controller.js';

const router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/logout', logout);

export default router;