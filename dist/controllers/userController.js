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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../entities/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const newuser = (req, res, next) => {
    console.log(req.body);
    const { username, email, password } = req.body;
    /// console.log(phoneNumber, '8', typeof phoneNumber);
    if (username.length === 0 || email.length === 0 || password.length === 0) {
        return res.status(400).json({ err: 'Something is missing' });
    }
    bcrypt_1.default.hash(password, 10, (err, hash) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield user_1.User.findOne({ where: { email } });
            console.log(user);
            if (user) {
                res.status(200).json({ message: 'User already exists' });
            }
            else {
                const user = {
                    username: username,
                    email: email,
                    password: hash
                };
                const nuser = user;
                const newuser = yield user_1.User.save(nuser);
                console.log(newuser);
                res.status(200).json({ message: 'User created' });
            }
        }
        catch (err) {
            console.log(err);
        }
    }));
};
function generateAccessToken(id, name) {
    return jsonwebtoken_1.default.sign({ user_id: id, username: name }, 'secretkey');
}
const existinguser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (email.length == 0 || password.length == 0) {
            return res.status(400).json({ err: "somethings missing" });
        }
        const user = yield user_1.User.findOne({ where: { email } });
        if (user) {
            console.log(user);
            console.log(user.email, '41');
            bcrypt_1.default.compare(password, user.password, (err, result) => {
                if (err) {
                    res.status(500).json({ message: "something went wrong" });
                }
                else if (result === true) {
                    res.status(200).json({ message: "Successfully logged in", token: generateAccessToken(user.user_id, user.username) });
                }
                else {
                    res.status(401).json({ message: "Password is incoorect" });
                }
            });
        }
        else {
            res.status(404).json({ message: "User not exist" });
        }
    }
    catch (err) {
        console.log(err);
    }
});
exports.default = {
    newuser,
    existinguser
};
//# sourceMappingURL=userController.js.map