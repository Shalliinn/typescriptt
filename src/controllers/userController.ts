import { NextFunction, Request, Response } from 'express';
import { User } from '../entities/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



const newuser = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);

    const { username, email, password } = req.body;
    /// console.log(phoneNumber, '8', typeof phoneNumber);

    if (username.length === 0 || email.length === 0 || password.length === 0) {
        return res.status(400).json({ err: 'Something is missing' });
    }

    bcrypt.hash(password, 10, async (err: any, hash: string) => {
        try {
            const user = await User.findOne({ where: { email } })
            console.log(user);

            if (user) {
                res.status(200).json({ message: 'User already exists' });
            } else {
                const user: { username: String, email: String, password: String } = {
                    username: username,
                    email: email,
                    password: hash
                }
                const nuser: any = user
                const newuser = await User.save(nuser);

                console.log(newuser);

                res.status(200).json({ message: 'User created' });
            }
        }
        catch (err) {
            console.log(err);

        }
    })
}

function generateAccessToken(id: number, name: any): any {
    return jwt.sign({ user_id: id, username: name }, 'secretkey');
}
const existinguser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        if (email.length == 0 || password.length == 0) {
            return res.status(400).json({ err: "somethings missing" });
        }
        const user = await User.findOne({ where: { email } })
        if (user) {
            console.log(user);

            console.log(user.email, '41');
            bcrypt.compare(password, user.password, (err: any, result: any) => {
                if (err) {
                    res.status(500).json({ message: "something went wrong" });
                } else if (result === true) {
                    res.status(200).json({ message: "Successfully logged in", token: generateAccessToken(user.user_id, user.username) });
                } else {
                    res.status(401).json({ message: "Password is incoorect" });
                }
            });
        } else {
            res.status(404).json({ message: "User not exist" })
        }
    }
    catch (err) {
        console.log(err);

    }
}

export default {
    newuser,
    existinguser
};