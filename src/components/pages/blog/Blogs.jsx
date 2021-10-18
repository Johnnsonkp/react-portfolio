import React from 'react'

export default function Blog(props) {
	const {name, post, url, img, date} = props
	return (
		<>
			<a href={url} className="blog-container">
				<div className="image-container">
					<img className="blog-pic" src={img} alt="" />
					<span className="date">{date}</span>
				</div>
				<div className="text-content">
					<h4>{name}</h4>
					<p>{post}</p>
					{/* <button>Read Story</button> */}
				</div>
			</a>
		</>
	)
}