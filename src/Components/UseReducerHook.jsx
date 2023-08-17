import React ,{useReducer}  from "react" ;


const UseReducerHook=()=>{
   
    let initialObj={
      name:"Hassaan" ,
      id:101 ,
      department:"CS",
    }
    const reducer=(state , action)=>{
      switch (action.type) {
        case "INCREMENT":
          return {...state,id:state.id+1}
         
        case "DECREMENT":
          return {...state,id:state.id-1}
          
        default:
          return state ;
      }

    }
      const [currentState,dispatch ]= useReducer(reducer,initialObj) ;
      console.log("currentState",currentState);

   
  
return(
    <>
     {"Name :" + currentState.name}
     {"id :" + currentState.id}
     {"Department :" + currentState.department}

      <button onClick={()=>{dispatch({type:"INCREMENT"})}}>Dispatch Increment Action </button>
      <button onClick={()=>{dispatch({type:"DECREMENT"})}}>Dispatch Decrement Action </button>
    </>
)
}
export default UseReducerHook;