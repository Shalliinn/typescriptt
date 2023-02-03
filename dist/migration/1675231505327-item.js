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
exports.item1675231505327 = void 0;
class item1675231505327 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`
        CREATE TABLE dynamic_item (
            Item_id serial PRIMARY KEY,
            Item_name VARCHAR ( 50 ) UNIQUE NOT NULL,
            price VARCHAR ( 50 ) NOT NULL,
            type VARCHAR ( 255 ) NOT NULL,
            user_id number NOT NULL,
            created_at timestamp default CURRENT_TIMESTAMP not null,
            updated_at timestamp default CURRENT_TIMESTAMP not null

        )`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.item1675231505327 = item1675231505327;
//# sourceMappingURL=1675231505327-item.js.map