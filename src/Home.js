import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    // eslint-disable-next-line
    const [blogs, setBlogs] = useState(null);
    
    const [isPending, setIsPending]= useState(true);

    const [error, setError] = useState(null);
    // fetch from the fake db.json file
    useEffect(()=>{
      setTimeout(()=>{
        fetch('http://localhost:8000/blogs')
        .then((res)=>{
            if(!res.ok){
                throw Error('Could not fetch data for that resource')
            }
          return  res.json()
        })
        .then((data)=>{
            // console.log(data)
            setBlogs(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err =>{
            const errMes = 'I can not load datas'
            setError( `${errMes}`)
            setIsPending(false)
        })
      }, 1000)
    })
    return ( 
        <div className="home">
          {error && <div>{error}</div>}
             {isPending && <div>Loading...</div>}
           {blogs && <Bloglist blogging={blogs} title='All Blogs'/>}

           
           {/* filtering blog by name */}

           {/* <Bloglist blogging={blogs.filter((blog)=>blog.author === 'dickson')} title="this is dickson's blog"/> */}
        </div>
     );
}
 
export default Home;