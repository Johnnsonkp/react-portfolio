import React from 'react'
import './Title.css'


const Title = (props) => {
    return (
        <>
        <div id={props.section} className="title-div-container">
            <h1 className="h1"><span className="titleSmall">{props.title1}<span className="accentHighlight">{props.title2}</span></span>
            <span className="titleBig">{props.titleBackground}</span></h1>
        </div>
        {/* <div className="center">
            <h1>Center</h1>
        </div> */}
        </>
    )
}


export default Title