import {usersInterface} from "../types/type";
import {createId} from "../support/support";


export const users : usersInterface[] = [
    {nikName : "kozzztia" , password : '12345' , isAuth: false , id:createId()},
    {nikName : "admin" , password : '123456' , isAuth: false , id:createId()},
    {nikName : "1" , password : '1' , isAuth: false , id:createId()},
]
