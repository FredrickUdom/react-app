import { useState } from "react";

const Home = () => {
    // eslint-disable-next-line
    const [blogs, setBlogs] = useState([
        {
            title: 'My new website',
            body: 'this is my website',
            id:1
        },

        {
            title: 'Welcome party',
            body: 'this is a welcome party',
            id:2
        },

        {
            title: 'Web dev top tool',
            body: 'this is for your web dev tools',
            id:3
        },
    ]);
    return ( 
        <div className="home">
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;