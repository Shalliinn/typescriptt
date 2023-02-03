"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controllers/userController"));
const router = express_1.default.Router();
router.post('/user/signup', userController_1.default.newuser);
router.post('/user/login', userController_1.default.existinguser);
exports.default = router;
// const express = require('express');
// const userController = require('../controllers/user');
// const router = express.Router();
// router.post('/user/signup', userController.newuser);
// router.post('/user/login', userController.existinguser);
// module.exports=router;
//# sourceMappingURL=user.js.map