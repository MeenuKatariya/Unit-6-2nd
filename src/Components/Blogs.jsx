import React from 'react'
import { Link } from 'react-router-dom';


function Blogs(){
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

const handleDelete = async (itemId) => {
    try {
        
        await fetch (`http://localhost:8080/blogs/${itemId}`,{
            method :"DELETE"
        });
        getData();
    } catch (error) {
        // console.log(error)
        
    }
    
}

React.useEffect(() => {
    // console.log(id);
    getData()
    
  },[]);

{
    return(
        // <div>hello</div>
        <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Contents</th>
                <th>Publications</th>
                <th>Published_on</th>
            </tr>
        </thead>
        <tbody>
            {
                data?.map((item) => {
                    return (
                        <tr >
                             {/* <tr key={item.author}></tr>
                             <tr key={item.content}></tr>
                             <tr key={item.publications}></tr>
                             <tr key={item.published_on}></tr> */}
                             <td>{item.title}</td> 
                             <td>{item.author}</td> 
                             <td> {item.content}</td>
                            <td>{item.publication}</td> 
                            <td>{item.published_on}</td> 
                       
                        <button onClick={() => {handleDelete(item.id)}}>DELETE</button>
                        <td><Link to={`/blogs/:id/view/`}>View</Link></td> 
                        <td><Link to={`/blogs/:id/edit/`}>Edit</Link></td> 


                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    )
}
}
export default Blogs