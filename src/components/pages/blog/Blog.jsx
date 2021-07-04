import React, {useState, useEffect} from 'react'
import './blog.css'
import Circles from '../../utils/Circles'
// import BlogGeneratorForm from '../../utils/blogGenerator/BlogGForm'
import BlogList from './BlogList'
import Title from '../../common/title'

function Blog() {
    const fadeScroll = () => {
        const checkpoint = 7500;

        window.addEventListener("scroll", () => {
            
            const currentScroll = window.pageYOffset;
            const currentSection = document.getElementById("blogSection")

            if(currentScroll > 3000 && window.innerWidth > 700){
                currentSection.classList.add('blur')
            } else{
                currentSection.classList.remove('blur')
            }

            // currentScroll > 3000 ? currentSection.classList.add('blur') : currentSection.classList.remove('blur')

            currentScroll <= checkpoint ? currentSection.style.opacity = 1.2 - currentScroll / checkpoint : currentSection.style.opacity = 0;
            
        });
    }

    const initialBlogPost = [

	]

    // function addBlog(blog) {
    //     generateBlogs([blog, ...blogs]) // Spread synthax, attaches the latest blog to the front array of blogs array
    // }

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
        <section id="blogSection" onLoad={fadeScroll()}>
            <div className="block"></div>
            
            <div className="content">
                <div className="blogs">
                <Title title1="MY" title2="BLOG" titleBackground="ARTICLE"/>
                </div>
                <div className="container">
                    <BlogList blogs={blogs} />
                </div>
            </div>
            
            <div className="circles">
                <Circles />
            </div>

        </section>
    )
}


export default Blog