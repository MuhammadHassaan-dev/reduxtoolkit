import React,{useContext} from "react" ;
import {UserContext} from "./ComC"
const ComA =()=>{
    const userName=useContext(UserContext);
    console.log("userName",userName);
return(
    <>
       <p>This is {userName}</p>
    </>
)
}
export default ComA;