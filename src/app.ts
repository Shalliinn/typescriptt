import express,{Express,Request,Response}from 'express';
import userAuthentication from './middleware/auth';
import { createConnection } from 'typeorm';
import bodyParser from 'body-parser';
import userRoutes from './routes/user'
import itemRoutes from './routes/item'
import http from 'http';
import socketIo from 'socket.io';
import { postItem } from './controllers/itemController';
import mongoose from 'mongoose';

const app:Express = express();
const port = 3000;

app.use(express.static(__dirname + '/../public'))
const server = http.createServer(app);
export const io = socketIo(server);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
  extended: true
  })

);
app.use(itemRoutes)
 //app.use(userRoutes)

 io.on('connection', (socket:any) => {
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

})

mongoose
.connect('mongodb+srv://shalin:shalin1234@cluster0.oqumu6f.mongodb.net/activity?retryWrites=true&w=majority')
 .then(result=>{
  console.log('mongodb connected');
  
})
createConnection()
  .then(async connection => {
    console.log('connected to database');
    
}).catch(error => console.log(error));
  
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});