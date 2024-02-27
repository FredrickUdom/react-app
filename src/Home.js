import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    // eslint-disable-next-line
    const [blogs, setBlogs] = useState(null);
    //  deleting blog 
    const handleDelete = (id)=>{
        const deleteBlog = blogs.filter(blog => blog.id !== id)
        setBlogs(deleteBlog)
    }
    // fetch from the fake db.json file
    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
    })
    return ( 
        <div className="home">
           <Bloglist blogging={blogs} title='All Blogs' handleDelete={handleDelete}/>

           {/* filtering blog by name */}

           <Bloglist blogging={blogs.filter((blog)=>blog.author === 'dickson')} title="this is dickson's blog"/>
        </div>
     );
}
 
export default Home;