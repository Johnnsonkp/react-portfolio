import React from 'react'
import Blog from './Blogs'

export default function BlogList(props) {
    const {blogs} = props
    const BlogWrapper = {
        width: "80%",
        margin: "auto",
        display: "flex",
        justifyContent: "spaceBetween",
    }
    return (
        <div style={BlogWrapper} class="blog-wrapper">
            {blogs.map(({name, post}, index) => (
				<Blog key={index} name={name} post={post} />
			))}
        </div>
    )
}