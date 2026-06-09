import api from "./api";

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
   }
}

export default authService;