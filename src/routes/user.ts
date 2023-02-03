import express,{ Router } from 'express';
import userController from '../controllers/userController'


const router = express.Router();
router.post('/user/signup', userController.newuser);
router.post('/user/login', userController.existinguser);

export default router;






// const express = require('express');

// const userController = require('../controllers/user');

// const router = express.Router();
// router.post('/user/signup', userController.newuser);
// router.post('/user/login', userController.existinguser);

// module.exports=router;