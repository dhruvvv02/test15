import Axios from "axios";
import {useEffect} from "react";
function F1()
{
    //HTTP request we need to place inside the lifecycle methods
    //But as we are working with function component there is no lifecycle methods
    //instead we have the concept called Hooks which help us to handle HTTP request
    //useEffect() is used to handle the side Effects

    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status === 200)
            {
                console.log(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[])

    return(
        <div>
            <h1>Hello I am Dhruv Shrivastava</h1>
        </div>
    )
}
export default F1;