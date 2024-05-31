import express from 'express';
import { register, login, checkout, healthDeclaration, botAccess } from '../controllers/gymBotController';

const router = express.Router();

router.post('/choosePlan', register);

router.post('/sendInformation', register);

router.post('/signForm', register);

router.post('/payment', register);

router.post('/register', register);
router.post('/register', register);



router.post('/register', register);
router.post('/login', login);
router.post('/checkout', checkout);
router.post('/health-declaration', healthDeclaration);
router.post('/bot-access', botAccess);

export default router;
