
import activity from '../models/activity'

export const help=async(activity_name:string,user_id:number)=>{
    const act:any=new activity({
        activity_name,
        user_id,
    })
    console.log(act,'.......30');
    
    return await act.save() 
}
