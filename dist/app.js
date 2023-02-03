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
exports.io = void 0;
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const body_parser_1 = __importDefault(require("body-parser"));
const item_1 = __importDefault(require("./routes/item"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.static(__dirname + '/../public'));
const server = http_1.default.createServer(app);
exports.io = (0, socket_io_1.default)(server);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
app.use(item_1.default);
//app.use(userRoutes)
exports.io.on('connection', (socket) => {
    console.log(`Connected client with id ${socket.id}`);
    //  app.post('/add-Item',userAuthentication.authenticate,
    //  postItem,async (req:any,res:any)=>{
    //   console.log(req.user,"311111");
    //   const msg={
    //     data:req.user
    //   }
    //   console.log(msg);
    //   socket.broadcast.emit('addItem',msg)
    //})
});
mongoose_1.default
    .connect('mongodb+srv://shalin:shalin1234@cluster0.oqumu6f.mongodb.net/activity?retryWrites=true&w=majority')
    .then(result => {
    console.log('mongodb connected');
});
(0, typeorm_1.createConnection)()
    .then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('connected to database');
})).catch(error => console.log(error));
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map