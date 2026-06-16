import Signup from "../auth/signup";
import api from "./api";
import Login from "../auth/Login";

const authService={
    login:async(name,password)=>{
        console.log(name, password);
        
    try{
       const response=await api.post("/login",{name,password});
        return response;
    }
    catch(error)
    {
        console.log(error);
        throw error;
        
    }
   },
   Signup:async(email,name,password)=>{
        console.log(email,name, password);
        
    try{
       const response=await api.post("/signup",{email,name,password});
        return response;
    }
    catch(error)
    {
        console.log(error);
        throw error;
        
    }
   },
   
}

export default authService;