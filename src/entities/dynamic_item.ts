import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { Server, Socket } from 'socket.io';

@Entity('dynamic_item')

export class Item extends BaseEntity {
    @PrimaryGeneratedColumn()
    Item_id: number


    @Column()
    Item_name: String;

    @Column()
    price: String;

    @Column()
    type: String;

    @Column()
    user_id: number;

    @Column('timestamp with time zone', {
        default: () => "now()"
    })
    public created_at: Date;
    @Column('timestamp with time zone', {

        default: () => "now()"
    })

    public updated_at: Date;

}

export class UserController {
    constructor(private io: Server) {}
}
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