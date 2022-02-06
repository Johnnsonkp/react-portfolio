import './Portfolio.css'
import '../../common/tabs/projectTabs.css'

import { Card, Col, Row } from 'antd';
import { Container, TextBoxContainer } from '../../common/containers/container';
import { ProjectCard, ProjectCardContainer } from '../../common/cards/cards';
import React, {useEffect, useState} from 'react';

import { CustomTitle } from '../../common/headers/headers';
import NavControl from '../../utils/NavControl'
import { TabSlider } from '../../common/tabs/tabs';
import { TechStackFullWidthContainer } from '../../common/frame/Frame'
import Title from '../../common/title'
import { useWindowSize } from '../../utils/utilFunctions';

const Portfolio = ({mode, setMode, lightColor, darkColor, darkFontColor}) => {
    const { Meta } = Card;
    const size = useWindowSize()
    
    const handleClick = (e) => {
        const allButtons = document.querySelectorAll('.portfolioBtn')
        const allProjects = document.querySelectorAll('.project-wrapper')
        const activeButton = e.target.id

        const displayAllProjects = () => {
            allProjects.forEach((project) => {
                project.style.display = "block"
            })
        }
        const displayProfessionalProjects = () => {
            allProjects.forEach((project) => {
                for(let i = 0; i < project.classList.length -1; i++){
                    if(project.classList[i] === "professional"){
                        project.style.display = "block"
                    } else{
                        project.style.display = "none"
                    }
                }
            })
        }
        const displayDesignProjects = () => {
            allProjects.forEach((project) => {
                for(let i = 0; i < project.classList.length; i++){
                    if(project.classList[i] !== "design"){
                        project.style.display = "none"
                    }else{
                        project.style.display = "block"
                    }
                }
            })
        }
        allButtons.forEach((btn) => {
            if(btn.classList[1]){
                btn.classList.remove("allProjects", "professionalProjects", "designProjects")
            }
        })
        e.target.classList.add(activeButton)
        
        if(activeButton === "allProjects"){
            displayAllProjects()
        }
        if(activeButton === "professionalProjects"){
            displayProfessionalProjects()
        }
        if(activeButton === "designProjects"){
            displayDesignProjects()
        }
    }

    const initialProject = [

	]

    const [project, generateProjects] = useState(initialProject)
    const [person, setPersonal] = useState([])
    const [professional, setProfessional] = useState([])

    // useEffect(async () => {
    //     await fetch('projects.json' ,{
    //         headers : { 
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     })
    //     .then((response) => response.json())
    //     .then((projects) => {
    //         generateProjects(projects.filter(project => project.category.includes('all')))
    //         setPersonal(projects.filter(project => project.category.includes('personal')))
    //         setProfessional(projects.filter(project => project.category.includes('professional')))
    //     })
    // },[])
    useEffect(() => {
        async function fetchData(){
            const response = await fetch('projects.json' ,{
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((response) => response.json())
            .then((projects) => {
                generateProjects(projects.filter(project => project.category.includes('all')))
                setPersonal(projects.filter(project => project.category.includes('personal')))
                setProfessional(projects.filter(project => project.category.includes('professional')))
            })
        }
        fetchData()
    },[])

    const ProjectPageText = ({mode, setMode, lightColor, darkColor, darkFontColor}) => {
        return (
            <div style={{alignItems: 'center', color: mode? darkFontColor : lightColor}}>
                <h1 style={{fontSize: size.width > 600? '2.5rem' : '1.5rem', color: mode? '#474747 !important' : lightColor, textAlign: 'center'}}>What we do.</h1>
                <p style={{textAlign: 'center', lineHeight: '2.1', fontSize: '1rem', marginBottom: '3em'}}>With every decision backed by data, our world-class team tailors services to a single overarching objective: evolving and growing your business. As experts in social, search, email and creative, we develop the recipe for your success.
                </p>
            </div>
        )
    }
    
    
    return (
        <section style={{background: mode? lightColor : darkColor, color: mode? darkFontColor : lightColor}} id="portfolio">
            <div 
                style={{
                    marginTop: '25px', 
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
                        content={'What we do.'}
                    /> 
            <TextBoxContainer size={size} mode={mode} lightColor={lightColor}>
                With every decision backed by data, our world-class team tailors services to a single overarching objective: evolving and growing your business. As experts in social, search, email and creative, we develop the recipe for your success.
            </TextBoxContainer>
            </div>
            

            
            <Container 
                width={'80%'}
                content={
                    <TabSlider 
                        marginBottom={'100px'}
                        style={{background: 'red', display: 'none'}}
                        tab1={<ProjectCardContainer projects={project}/>}
                        tab1Name={"All"}
                        tab2={<ProjectCardContainer projects={person}/>}
                        tab2Name={"Personal"}
                        tab3={<ProjectCardContainer projects={professional}/>}
                        tab3Name={"Professional"}/> }
            />

            {/* <TechStackFullWidthContainer 
               
            />  */}
        </section>
    )
}
export default Portfolio