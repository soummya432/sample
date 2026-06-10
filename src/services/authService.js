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
        return console.error("error");
        
    }
   },
   Signup:async(email,name,password)=>{
        console.log(email,name, password);
        
    try{
       const response=await api.post("/Signup",{email,name,password});
        return response;
    }
    catch(error)
    {
        return console.error("error");
        
    }
   },
   
}

export default authService;