import './blog.css'

import React, {useEffect, useState} from 'react'

import BlogList from './BlogList'
import { Container } from '../../common/containers/container'
import { CustomTitle } from '../../common/headers/headers'
import { DisplayBox } from '../../common/frame/Frame'
import { NakedButtonLink } from '../../common/button/Buttons'
import NavControl from '../../utils/NavControl'
import { TechStackFullWidthContainer } from '../../common/frame/Frame'
import Title from '../../common/title'
import { useWindowSize } from "../../utils/utilFunctions";

function Blog({mode, setMode, lightColor, darkColor}) {
    const size = useWindowSize()
    const initialBlogPost = [

	]

    const [blogs, generateBlogs] = useState(initialBlogPost)

    useEffect(() => {
        console.log("in use effect")
        fetch('blogs.json' ,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((blogs) => generateBlogs(blogs))
    },[])

    return (
        <section 
            id="blogSection" 
            style={{
                backgroundColor: mode? lightColor : darkColor,
                paddingTop: size.width < 1000 && size.width > 900? '25rem' : null,
                height: size.width < 1000 && '1000px'
            }}>

            <div 
                style={{
                    marginTop: '25px', 
                    // height: size.width < 1000 && '2000px',
                    padding: '20px', 
                    marginLeft: 'auto', 
                    marginRight: 'auto', 
                    width: size.width > 960? '70%' : '100%', 
                    textAlign: 'center'   
                }}
            >
                <CustomTitle 
                    size={size} 
                    mode={mode} 
                    lightColor={lightColor}
                    content={'Articles'}
                /> 
            </div>
            
            <Container 
                content={
                    <DisplayBox
                     innerCard={false} 
                     component1={<BlogList blogs={blogs} />}
                     width={size.width > 1150? '90%' : '90%'}
                     backgroundWidth={'90%'}
                     backgroundHeight={'90%'}
                     boxPadding={false}
                     marginAuto={true}
                     title={''}
                     titleStyle={{
                         marginLeft: '15px', 
                         marginBottom: '40px', 
                         fontSize: size.width > 1350? null : size.width > 1200? '1.7rem' : '1.4rem',
                         display: 'none'
                    }}
            />} />

        </section>
    )
}


export default Blog