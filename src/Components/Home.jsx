import React from "react" ;
import { useNavigate } from 'react-router-dom';

import {useDispatch ,useSelector} from "react-redux";

const Home =()=>{
    const counterValue =useSelector((state)=>state.allreducers.counter.value) ;
    const userName =useSelector((state)=>state.allreducers.user.value) ;
    const navigate = useNavigate();
    const getUserPosts=()=>{
        navigate(`/posts/8`)
    }
  
return(
   <>
   <p>Home</p>
   <p>CounterValue : {counterValue}</p>
   <p>userName : {userName}</p>
   <button onClick={getUserPosts}>Posts</button>
   </>
)
}
export default Home ;