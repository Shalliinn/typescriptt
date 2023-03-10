"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = exports.Item = void 0;
const typeorm_1 = require("typeorm");
let Item = class Item extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Item.prototype, "Item_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Item.prototype, "Item_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Item.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Item.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Item.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', {
        default: () => "now()"
    }),
    __metadata("design:type", Date)
], Item.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', {
        default: () => "now()"
    }),
    __metadata("design:type", Date)
], Item.prototype, "updated_at", void 0);
Item = __decorate([
    (0, typeorm_1.Entity)('dynamic_item')
], Item);
exports.Item = Item;
class UserController {
    constructor(io) {
        this.io = io;
    }
}
exports.UserController = UserController;
// export const createItem = async (item: any) => {
//     const newItem = await Item.save(item);
//     return newItem;
// };
// export const getItemById = async (email: String) => {
//     const user = await Item.findOne({ where: { email } });
//     return user;
// };
// // Get all users
// export const getAllItem = async (user_id:number) => {
//     const users = await Item.find({where:{user_id:user_id}});
//     return users;
// };
// export const updateItem = async (item: any) => {
//     const eItem = await Item.update({ Item_id: item.Item_id }, { Item_name: item.Item_name, price: item.price, type: item.type });
//     return eItem;
// };
// export const DeleteItem = async (Item_id: any) => {
//      const id=  +Item_id
//      console.log(Item_id,id,'.......');
//     const eItem = await Item.delete({ Item_id: Item_id })
//     return eItem;
// };
// export const createItem = async (item: any) => {
//     const newItem = await Item.save(item);
//     return newItem;
// };
// export const getItemById = async (email: String) => {
//     const user = await Item.findOne({ where: { email } });
//     return user;
// };
// // Get all users
// export const getAllItem = async (user_id:number) => {
//     const users = await Item.find({where:{user_id:user_id}});
//     return users;
// };
// export const updateItem = async (item: any) => {
//     const eItem = await Item.update({ Item_id: item.Item_id }, { Item_name: item.Item_name, price: item.price, type: item.type });
//     return eItem;
// };
// export const DeleteItem = async (Item_id: any) => {
//      const id=  +Item_id
//      console.log(Item_id,id,'.......');
//     const eItem = await Item.delete({ Item_id: Item_id })
//     return eItem;
// };
//# sourceMappingURL=dynamic_item.js.map