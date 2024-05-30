import express from 'express';
// import { requireAuth } from '../middleware/auth';
import {
  allUsersCont,
  signUpCont,
  loginCont,
  userCartCont,
  userCont,
  addProductCont,
  removeProductCont,
  // cartByIdCont,
  // allCartsCont,
} from '../controllers/usersController';

const router = express.Router();



router.post('/signUp', signUpCont);

router.get('/user/:id', userCont);

router.post('/login', loginCont);

router.post('/userCart', userCartCont);

router.get('/allUsers', allUsersCont);

router.post('/addProduct', addProductCont);

router.delete('/removeProduct', removeProductCont);

// router.post('/', sendNewUser);
// router.post('/', sendNewUser);
// router.get('/allCarts', allCartsCont);
// router.post('/', sendNewUser);

export default router;
