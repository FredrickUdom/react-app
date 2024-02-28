
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
   const {datas:blogs, isPending, error}=useFetch('http://localhost:8000/blogs')
    
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