import  jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { User } from '../entities/user';

const authenticate = async (req: any, res: Response, next: NextFunction) => {
try {
const token = req.header('Authorization');
console.log(token,'8');

const user = jwt.verify(token, 'secretkey');
console.log(user,"11");

const foundUser = await User.findOne(user.user_id);
console.log(foundUser,'14');

req.user = foundUser;
next();
} catch (err) {
console.log(err);
return res.status(401).json({ success: false });
}
};

export default{ authenticate };