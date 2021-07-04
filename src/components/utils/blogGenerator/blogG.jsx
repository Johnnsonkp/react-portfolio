import React, {useState} from 'react'
import BlogGeneratorForm from './BlogGForm'
import './blogG.css'

const BlogGenerator = () => {
    const BlogList = (props) => {
        return (
            <div>
                <span>{props.blogs}</span>
            </div>
        )
    }
    const initialBlogPost = {
        subject: "First Blog Post",
        description: "This is my first post",
    }

    function addBlog(blog) {
        generateBlogs([blog, ...blogs]) // Spread synthax, attaches the latest blog to the front array of blogs array
    }

    const [blogs, generateBlogs] = useState(initialBlogPost)
    
    return (
        <>
            <button>Create blog posting</button>
        
            <BlogGeneratorForm addBlog={addBlog}/>
            <BlogList blogs={blogs} />
        </>
    )
}

export default BlogGenerator