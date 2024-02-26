const Bloglist = (props) => {
    const blogs = props.blogs
    return ( 
        <div className="blog-list">
             {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2><span>This the tittle of this blog:</span> {blog.title}</h2>
                    <br />
                    <h2><span>This the body of this blog:</span> {blog.body}</h2>
                    <p>written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Bloglist;