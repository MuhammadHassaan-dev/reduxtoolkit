import React , {useEffect ,useState}from "react" ;
import {useParams} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {fetchAllPosts} from "../Redux/Slices"
import axios from "axios";


const Posts =()=>{
    const dispatch =useDispatch();
    let posts =useSelector((state)=>state.allreducers)
    console.log("posts state",posts);
    const { userId } = useParams();
   
    useEffect(()=>{
        dispatch(fetchAllPosts(3));
        postAPost();
        getPosts();
    },[dispatch])
    const getPosts=async()=>{
        let url ="https://jsonplaceholder.typicode.com/posts?userId="+userId;
        try{
            let posts=await axios.get(url);
            console.log("posts",posts);
        }
        catch(error){
            console.log(error);
        }
           
    }
    const postAPost=async()=>{
        let url ="https://jsonplaceholder.typicode.com/posts";
        const data = {
            userId:2,
            title:"A small post" ,
            body:"this is s small post made by a user"
        }
        try{
           const post= await axios.post(url,data) ;
           console.log("post",post);
        }catch(err){
            console.log("err",err);
        }
          
    }
return(
   <>
   <p>Posts</p>
   </>
)
}
export default Posts ;