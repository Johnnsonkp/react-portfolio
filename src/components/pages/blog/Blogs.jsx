import React from 'react'

export default function Blog(props) {
	const {name, post} = props
	return (
		<a href="https://medium.com/@johnnsonkp" className="blog-container">
			<div className="image-container">
				<img className="blog-pic" src="online-shopping.jpeg" alt="" />
				<span className="date">12 <br/>JUNE</span>
			</div>
			<div className="text-content">
				<h4>{name}</h4>
				<p>{post}</p>
				{/* <button>Read Story</button> */}
			</div>
			
		</a>
	)
}