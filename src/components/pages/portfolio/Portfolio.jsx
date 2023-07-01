import './Portfolio.css'
import '../../common/tabs/projectTabs.css'

import { Container, TextBoxContainer } from '../../common/containers/container';
import { ProjectCard, ProjectCardContainer } from '../../common/cards/cards';
import React, {useEffect, useState} from 'react';

import { CustomTitle } from '../../common/headers/headers';
import NavControl from '../../utils/NavControl'
import { TabSlider } from '../../common/tabs/tabs';
import { TechStackFullWidthContainer } from '../../common/frame/Frame'
import Title from '../../common/title'
import { useWindowSize } from '../../utils/utilFunctions';

const Portfolio = ({mode, lightColor, darkColor, darkFontColor}) => {
    const size = useWindowSize()
    const initialProject = [

	]
    const [project, generateProjects] = useState(initialProject)
    const [person, setPersonal] = useState([])
    const [professional, setProfessional] = useState([])

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
                        content={'Portfolio.'}
                    /> 
            <TextBoxContainer size={size} mode={mode} lightColor={lightColor}>
                Some of the various projects I have created or worked on, both professionally and personally.
            </TextBoxContainer>
            </div>
            <Container 
                width={'80%'}
                maxWidth={'1300px'}
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
        </section>
    )
}
export default Portfolio