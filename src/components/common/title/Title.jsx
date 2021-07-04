import React from 'react'
import './Title.css'


const Title = (props) => {
    return (
        <h1 className="h1"><span className="titleSmall">{props.title1}<span className="accentHighlight">{props.title2}</span></span>
            <span className="titleBig">{props.titleBackground}</span></h1>
    )
}


export default Title