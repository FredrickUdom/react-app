import {Link} from 'react-router-dom';
const Bloglist = ({blogging, title, handleDelete}) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
             {blogging.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                   <Link to={`/blog/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                        
                   </Link>
                    {/* <button type="button" onClick={()=> handleDelete(blog.id)}>Delete blog</button> */}
                </div>
            ))}
        </div> 
     );
}
 
export default Bloglist;