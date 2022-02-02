import {Blog} from './Blogs'
import React from 'react'
import { SingleLargeBlog } from './Blogs'

export default function BlogList(props) {
    
    const BlogWrapper = {
        width: "100%",
        margin: "auto",
        display: "flex",
        justifyContent: "spaceBetween",
    }
    return (
        <div style={BlogWrapper} className="blog-wrapper">
            {props.blogs.map(({name, post, url, img, date}, index) => (
                props.blogs && props.blogs.length > 1?
                    <Blog key={index} name={name} post={post} url={url} img={img} date={date}/> 
                        : 
                    <SingleLargeBlog key={index} name={name} post={post} url={url} img={img} date={date}/>
			)) 
        } 
        </div>
    )
}