import React ,{createContext} from "react" ;
import ComB from "./ComB";
 const UserContext = createContext("Ali");
const ComC =()=>{
    
     let userName="Alee Dar";
return(
    <>
    <UserContext.Provider value={userName}>
       <ComB />
    </UserContext.Provider>
    </>
)
}
export default ComC ;
export { UserContext };