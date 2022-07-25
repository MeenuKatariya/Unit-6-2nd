

import React from 'react'
import { Link } from 'react-router-dom';


function View(){
const [data,setData]=React.useState([])


const getData =async () => {
    try {
        
    
        let response =await fetch(`http://localhost:8080/blogs`);
        let result = await response.json();
        setData(result);
       

    } catch (error) {
        console.log(error)
    

    }
    
}



React.useEffect(() => {
    // console.log(id);
    getData()
    
  },[]);

{
    return(
        <div>
            <Link to="/blogs">Blogs</Link>
           {
            data.map((item=>{
              return(
                <div>
                    <p>Title : {item.title}</p>
                    <p>Author : {item.author}</p>
                    <p>Content: {item.content}</p>
                    <p>Publication : {item.publication}</p>
                    <p>Published_on : {item.published_on}</p>
                </div>
              )
            }))
           }

        
        </div>
       
    )
}
}
export default View