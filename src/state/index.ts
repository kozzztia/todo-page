import {usersInterface} from "../types/type";
import {createId} from "../support/support";


export const users : usersInterface[] = [
    {nikName : "1" , password : '1' , isAuth: false , id:createId()},
    {nikName : "2" , password : '2' , isAuth: false , id:createId()},
    {nikName : "kos" , password : 'kos' , isAuth: false , id:createId()},
]
