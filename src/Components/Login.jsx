import React ,{useState} from "react" ;
import {useDispatch ,useSelector} from "react-redux" ;
import {login, logout ,increment, decrement } from "../Redux/Slices" ;

const Login =()=>{
    const dispatch = useDispatch() ;
    const [name,setName] = useState("");
    console.log("name",name);
    const counterValue =useSelector((state)=>state.allreducers.counter.value) ;
    const userName =useSelector((state)=>state.allreducers.user.value) ;
return(
   <>
   <p>Login</p> {userName}
   <input onChange={(e)=>setName(e.target.value)}></input>
   <button onClick={()=>{dispatch(login(name))}}>Login</button>
   <button onClick={()=>{dispatch(logout())}}>Logout</button>

   <p>Counter : {counterValue}</p>
   <button onClick={()=>{dispatch(increment())}}>Increment</button>
   <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
   </>
   
)
}
export default Login ;