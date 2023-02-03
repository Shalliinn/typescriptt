"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const itemController_1 = require("../controllers/itemController");
const auth_1 = __importDefault(require("../middleware/auth"));
const router = express_1.default.Router();
router.post('/add-Item', auth_1.default.authenticate, itemController_1.postItem);
router.get('/get-Item', auth_1.default.authenticate, itemController_1.getItem);
router.delete('/delete-expense/:Item_id', auth_1.default.authenticate, itemController_1.deleteItem);
router.post('/update-item', auth_1.default.authenticate, itemController_1.editItem);
exports.default = router;
//# sourceMappingURL=item.js.map