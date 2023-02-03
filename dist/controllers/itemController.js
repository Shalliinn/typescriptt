"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItem = exports.deleteItem = exports.editItem = exports.postItem = void 0;
const dynamic_item_1 = require("../entities/dynamic_item");
const app_1 = require("../app");
const mongo_1 = require("../helper/mongo");
function postItem(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        const { Item_name, price, type } = req.body;
        console.log(req.user);
        const id = req.user.user_id;
        console.log(id, '10000');
        try {
            const data = ({
                Item_name,
                price,
                type,
                user_id: id,
            });
            const obj = data;
            const activity_name = "Item-Creted";
            const activity = (0, mongo_1.help)(activity_name, id);
            console.log(activity, '.....31');
            const newItem = yield dynamic_item_1.Item.save(obj);
            res.status(200).json({ message: 'Item created' });
            app_1.io.emit('addItem', { data: newItem });
        }
        catch (error) {
            console.log(error);
            const activity_name = "Item Not Creted";
            const activity = (0, mongo_1.help)(activity_name, id);
            app_1.io.emit('addItem', { data: error });
        }
    });
}
exports.postItem = postItem;
function editItem(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const item = req.body;
            var id = req.user.user_id;
            const eItem = yield dynamic_item_1.Item.update({ Item_id: item.Item_id }, { Item_name: item.Item_name, price: item.price, type: item.type });
            if (eItem) {
                res.status(200).json({
                    data: eItem,
                    descripation: "Item updated successfully"
                });
                const activity_name = "Item updated successfully";
                const activity = (0, mongo_1.help)(activity_name, id);
                app_1.io.emit('updateItem', { data: eItem });
            }
            else {
                res.status(500).json({ message: "something went wrong" });
                const activity_name = "item is not present while updating";
                const activity = (0, mongo_1.help)(activity_name, id);
                app_1.io.emit('updateItem', { data: "item is not present" });
            }
        }
        catch (error) {
            res.status(500).json({ message: "something went wrong" });
            const activity_name = "something went wrong while updating";
            const activity = (0, mongo_1.help)(activity_name, id);
            app_1.io.emit('addItem', { data: error });
        }
    });
}
exports.editItem = editItem;
function deleteItem(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var id = req.user.user_id;
            const delItem = yield dynamic_item_1.Item.delete({ Item_id: req.params.Item_id });
            res.status(200).json({
                descripation: "Item deleted successfully"
            });
            const activity_name = "Item deleted successfully";
            const activity = (0, mongo_1.help)(activity_name, id);
            app_1.io.emit('deleteItem', { data: "item is Item deleted successfully" });
        }
        catch (error) {
            const activity_name = "something went wrong while deleting";
            const activity = (0, mongo_1.help)(activity_name, id);
            res.status(500).json({ message: "something went wrong" });
            app_1.io.emit('deleteItem', { data: error });
        }
    });
}
exports.deleteItem = deleteItem;
function getItem(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var id = req.user.user_id;
            const Items = yield dynamic_item_1.Item.find({ where: { user_id: id } });
            res.status(200).json({
                data: Items,
                descripation: "Items get successfully"
            });
            const activity_name = "Items get successfully";
            const activity = (0, mongo_1.help)(activity_name, id);
            app_1.io.emit('getItem', { data: Items });
        }
        catch (error) {
            const activity_name = "something went wrong while getting item";
            const activity = (0, mongo_1.help)(activity_name, id);
            res.status(500).json({ message: "something went wrong" });
            app_1.io.emit('getItem', { data: error });
        }
    });
}
exports.getItem = getItem;
//# sourceMappingURL=itemController.js.map