    import express,{ Router } from 'express';
    import {postItem,editItem,deleteItem,getItem} from '../controllers/itemController'
    import userAuthentication from '../middleware/auth';


const router = express.Router();

router.post(
  '/add-Item',
  userAuthentication.authenticate,
  postItem
);
router.get(
  '/get-Item',
  userAuthentication.authenticate,
  getItem
);

router.delete('/delete-expense/:Item_id', userAuthentication.authenticate,deleteItem);

router.post('/update-item',  userAuthentication.authenticate,editItem );

export default router;