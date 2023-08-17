import React ,{useRef,useState,useEffect}  from "react" ;


const UseRefHook =()=>{
    const[inputValue,setInputValue] = useState("") ;
    const count = useRef(0) ;
    useEffect(()=>{
       count.current=count.current+1
    })
  
return(
    <>
      <input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
      {count.current}
    </>
)
}
export default UseRefHook;