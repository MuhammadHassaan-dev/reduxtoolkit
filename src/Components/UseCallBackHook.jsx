import React ,{useRef,useState,useEffect,useCallback}  from "react" ;


const UseCallBackHook =()=>{
    const[inputValue,setInputValue] = useState("") ;
    const[initialArray,setInitialArray] = useState(["here"]) ;
   
   
   
    useCallback(()=>{
      setInitialArray((prevValue)=>[...prevValue,"new todo"])
    },[inputValue])
return(
    <>
      <input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
      {count.current}
    </>
)
}
export default UseCallBackHook;