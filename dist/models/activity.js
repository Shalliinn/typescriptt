"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const activitySchema = new Schema({
    activity_name: {
        type: String,
        required: true
    },
    user_id: {
        type: Number,
        required: true,
    },
});
activitySchema.set('timestamps', true);
exports.default = mongoose_1.default.model('activity', activitySchema);
//# sourceMappingURL=activity.js.map