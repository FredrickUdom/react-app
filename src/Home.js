import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    // eslint-disable-next-line
    const [blogs, setBlogs] = useState(null);
    //  deleting blog 
   
    // fetch from the fake db.json file
    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then((res)=>{
          return  res.json()
        })
        .then((data)=>{
            // console.log(data)
            setBlogs(data)
        })
    })
    return ( 
        <div className="home">
           {blogs && <Bloglist blogging={blogs} title='All Blogs'/>}

           {/* filtering blog by name */}

           {/* <Bloglist blogging={blogs.filter((blog)=>blog.author === 'dickson')} title="this is dickson's blog"/> */}
        </div>
     );
}
 
export default Home;