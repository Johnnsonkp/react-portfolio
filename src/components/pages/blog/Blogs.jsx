import React, {useEffect, useState} from 'react'

import { ArrowButton } from '../../common/button/Buttons'
import BlogList from './BlogList'
import { Container } from '../../common/containers/container'
import { DisplayBox } from '../../common/frame/Frame'
import { NakedButtonLink } from '../../common/button/Buttons'
import { useWindowSize } from "../../utils/utilFunctions";

export function Blog(props) {
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

export const SingleLargeBlog = (props) => {
	const {name, post, url, img, date} = props
	
	const styles = {
		cardContainer: {
			width: '100%',
			margin: 'auto',
			height: '100%',
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			// border: '1px solid red'
		},
		imgContainer: {
			width: '200px',
			height: '100%',
			flex: 0.5,
			// border: '1px solid red'
		},
		imgStyle: {
			width: '110%',
			height: '100%',
			height: '320px',
			borderStyle: 'none',
			boxSizing: 'inherit',
			boxShadow: "12px 12px 2px 1px rgb(0 0 0 / 8%)"
		}, 
		textContent: {
			flex: 0.4,
			width: '100%',
			padding: '0px',
		}
	}
	
	return(
		<div>	
			<div>
			<a href={url} className="" style={styles.cardContainer}>
				<div style={styles.imgContainer} className="">
					<img style={styles.imgStyle} className="" src={img} alt="" />
				</div>
				<div className="" style={styles.textContent}>
					<h2>{name}</h2>
					<p style={{color: '#111', marginTop: '25px', marginBottom: '35px', fontSize: '1rem', lineHeight: '1.8'}}>{post}..</p>
					<NakedButtonLink
						link={url} 
                        title={'Read the full article'}
					/> 
				</div>
			</a>
			</div>
			<div style={{position: 'relative', top: '18%', left: '0%'}}>
				<ArrowButton />
			</div>
		</div>
	)
}