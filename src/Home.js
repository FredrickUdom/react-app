import { useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    // eslint-disable-next-line
    const [blogs, setBlogs] = useState([
        {
            title: 'My new website',
            body: 'this is my website',
            author: 'dickson',
            id:1
        },

        {
            title: 'Welcome party',
            body: 'this is a welcome party',
            author: 'mark',
            id:2
        },

        {
            title: 'Web dev top tool',
            body: 'this is for your web dev tools',
            author: 'james',
            id:3
        },
    ]);
    return ( 
        <div className="home">
           <Bloglist blogging={blogs} title='All Blogs'/>

           {/* filtering blog by name */}

           <Bloglist blogging={blogs.filter((blog)=>blog.author === 'dickson')} title="this is dickson's blog"/>
        </div>
     );
}
 
export default Home;