import express from 'express';
// import { requireAuth } from '../middleware/auth';
import {
  allProductsCont,
  allCategoriesCont,
  productByIdCont,
  categoryByIDCont,
  topFiveCatCont,
  topFiveProdCont,
  productsCompareCont,
  // allCartsCont,
  // cartByIdCont,
} from '../controllers/productsController';

const router = express.Router();


router.get('/category/:id', categoryByIDCont);

router.get('/product/:id', productByIdCont);

router.get('/allCategories', allCategoriesCont);

router.get('/allProducts', allProductsCont);

router.get('/topFiveCategories', topFiveCatCont);

router.get('/topFiveProducts', topFiveProdCont);

router.get('/productsCompare', productsCompareCont)
// router.get('/allProducts', allProductsCont);
// router.get('/product/:id', productByIdCont);
// router.get('/all', allCategoriesCont);
// router.get('/top5', top5Cont);
// router.post('/', sendNewUser);
// router.post('/', sendNewUser);
// router.post('/', sendNewUser);
// router.post('/', sendNewUser);

export default router;
