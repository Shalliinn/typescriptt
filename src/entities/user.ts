import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm"


@Entity('user_account')

export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
user_id:number


@Column()
username:String;

@Column({
    unique:true
})
email:String;

@Column()
password:String;

@Column('timestamp with time zone', {
 default: () => "now()"
    })
     public created_at: Date;
    @Column('timestamp with time zone', {
   
     default: () => "now()"
   })
   
    public updated_at: Date;

}


// export const createUser = async (user:any) => {
//     const newUser = await User.save(user);
//     return newUser;
//   };
  

//   export const getUserById = async (user_id:number) => {
//     const user = await User.findOne({ where: {user_id } });
//     return user;
//   };
  
//   // Get all users
//   export const getAllUsers = async () => {
//     const users = await User.find();
//     return users;
//   };
  