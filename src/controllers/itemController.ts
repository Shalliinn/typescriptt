import { NextFunction, Request, Response } from 'express';
import { Item } from '../entities/dynamic_item';
import activity from '../models/activity'
import socket from 'socket.io'
import { io } from '../app'
import { isExpressionStatement } from 'typescript';
import { help } from '../helper/mongo';

export async function postItem(req: any, res: Response, next: any) {
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
        })
        const obj: any = data
        const activity_name="Item-Creted"
        const activity=help(activity_name,id)
        console.log(activity,'.....31');
        
        const newItem = await Item.save(obj)
        res.status(200).json({ message: 'Item created' });
        io.emit('addItem', { data: newItem })
    } catch (error) {
        console.log(error);
        const activity_name="Item Not Creted"
        const activity=help(activity_name,id)
        io.emit('addItem', { data: error })
    }
}



export async function editItem(req: any, res: Response, next: NextFunction) {
    try {
        const item = req.body;
        var id = req.user.user_id;
        const eItem = await Item.update({ Item_id: item.Item_id }, { Item_name: item.Item_name, price: item.price, type: item.type });
        if (eItem) {
            res.status(200).json({
                data: eItem,
                descripation: "Item updated successfully"
            });
         const activity_name="Item updated successfully"
         const activity=help(activity_name,id)
            io.emit('updateItem', { data: eItem })
        }
        else {
            res.status(500).json({ message: "something went wrong" });
            const activity_name="item is not present while updating"
             const activity=help(activity_name,id)
            io.emit('updateItem', { data: "item is not present" })
        }
    } catch (error) {
        res.status(500).json({ message: "something went wrong" });
        const activity_name="something went wrong while updating"
        const activity=help(activity_name,id)
        io.emit('addItem', { data: error })
    }
}


export async function deleteItem(req: any, res: Response, next: NextFunction) {
    try {
        var id = req.user.user_id;
        const delItem = await Item.delete({ Item_id: req.params.Item_id })
        res.status(200).json({
            descripation: "Item deleted successfully"
        });
        const activity_name="Item deleted successfully"
        const activity=help(activity_name,id)
        io.emit('deleteItem', { data: "item is Item deleted successfully" })
    } catch (error) {
        const activity_name="something went wrong while deleting"
        const activity=help(activity_name,id)
        res.status(500).json({ message: "something went wrong" });
        io.emit('deleteItem', { data: error })
    }
}
export async function getItem(req: any, res: Response) {
    try {
        var id = req.user.user_id;
        const Items = await Item.find({ where: { user_id: id } })
        res.status(200).json({
            data: Items,
            descripation: "Items get successfully"
        });
        const activity_name="Items get successfully"
        const activity=help(activity_name,id)
        io.emit('getItem', { data: Items })
    } catch (error) {
        const activity_name="something went wrong while getting item"
        const activity=help(activity_name,id)
        res.status(500).json({ message: "something went wrong" });
        io.emit('getItem', { data: error })

    }
}
