import React from 'react'

export default function Blog(props) {
	const {name, post} = props
	return (
		<a href="https://www.google.com/" class="blog-container">
			<div class="image-container">
				<img className="blog-pic" src="online-shopping.jpeg" />
				<span class="date">12 <br/>JUNE</span>
			</div>
			<div class="text-content">
				<h4>{name}</h4>
				<p>{post}</p>
				{/* <button>Read Story</button> */}
			</div>
			
		</a>
	)
}