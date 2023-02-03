import mongoose from 'mongoose';
const Schema=mongoose.Schema;

const activitySchema=new Schema({
activity_name:{
        type:String,
        required:true
         },
 user_id:{
             type:Number,
             required:true,
         },
})
activitySchema.set('timestamps', true)
export default mongoose.model('activity',activitySchema)
