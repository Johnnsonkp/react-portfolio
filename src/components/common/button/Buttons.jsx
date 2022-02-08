import './Button.css'

import { Button, Drawer, Radio, Space } from 'antd';

import {ArrowRightOutlined} from "@ant-design/icons"
import {Link} from 'react-router-dom'
import { useState } from 'react';

export const PrimaryButton = (props) => {
    const gradient = process.env.REACT_APP_PRIMARY_LINEAR_GRADIENT_COLOR;
    const styles = {
        button:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f6004c',
            background: 'linear-gradient(90deg, #E80A89 0%, #F15B2A 100%)',
            padding: '0.8rem calc(5px + 1.7vw)',
            color: '#fff',
            fontWeight: 700,
            fontSize: '0.75rem',
            boxShadow: props.boxShadow ?'10px 10px 12px 0 rgb(0 0 0 / 22%)' : null,
            letterSpacing: '.5px',
            textTransform: 'uppercase',
            transition: '250ms ease-out',
            marginTop: props.marginTop || '20px',
            border: 'none',
            cursor: 'pointer',
            lineHeight: '1.6',
            minWidth: props.minWidth || '160px',
            margin: 'auto',
            transition: 'all 250ms ease-out 0s',
            float: props.position
        }
    }
    return (
        <button 
            style={styles.button}
            className={props.pulse? 'pulse-effect' : null}
        >   
            {props.href ?
                <a href={props.link}>{props.title}</a> :
                <Link to={props.link}>{props.title}</Link> 
            }
        </button>
    )
}
export const SecondaryButton = (props) => {
    const gradient = process.env.REACT_APP_PRIMARY_LINEAR_GRADIENT_COLOR;
    const styles = {
        button:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f6004c',
            background: 'linear-gradient(90deg, #E80A89 0%, #F15B2A 100%)',
            padding: '0.8rem calc(5px + 1.7vw)',
            color: '#fff',
            fontWeight: 700,
            fontSize: '0.6rem',
            boxShadow: props.boxShadow ?'10px 10px 12px 0 rgb(0 0 0 / 22%)' : null,
            letterSpacing: '.5px',
            textTransform: 'uppercase',
            transition: '250ms ease-out',
            marginTop: '20px',
            border: 'none',
            cursor: 'pointer',
            lineHeight: '1.6',
            // minWidth: '120px',
            margin: 'auto',
            transition: 'all 250ms ease-out 0s',
            float: props.position
        }
    }
    return (
        <button 
            style={styles.button}
            className={props.pulse? 'pulse-effect' : null}
        >   
            {/* {props.href ?
                <a href={props.link}>{props.title}</a> :
                <Link to={props.link}>{props.title}</Link> 
            } */}
            <a href={props.link}>{props.title}</a>
        </button>
    )
}

export const HamburgerMenu = (props) => {
    const [ visible, setVisible ] = useState(false)
    const placement = 'top'

    const onClose = () => {
        console.log("closed")
    };

    const DropDown = () => {
        return (
            <Drawer
                title="Menu"
                placement={placement}
                closable={true}
                onClose={onClose}
                visible={visible}
                key={placement}
                autoFocus={false}
                bodyStyle={{color: '#111', bottom: '300px', padding: '0px'}}
                height={280}
                headerStyle={{display: 'none'}}
                style={{top: '66px'}}
            >   
                <Link to="/" className="drawer-border">Home</Link>
                <Link to="/about" className="drawer-border">About</Link>
                <Link to="/projects" className="drawer-border">Projects</Link>
                <Link to="/blog" className="drawer-border">Blog</Link>
                <Link to="/contact" className="drawer-border">Contact</Link>
            </Drawer>
            
        )
    }

    
    const menuToggle = () => {
      setVisible(!visible)
      let spanArray = document.querySelectorAll(".span-tags");
      spanArray.forEach((span) => {
        span.classList.toggle("active-span");
      });
    };  
    return (
      <div>  
        <button
            onClick={menuToggle}
            className="menu-toggler"
            style={{ cursor: "none" }}
        >
            <div >
                <span style={{backgroundColor: props.mode? props.darkColor : props.lightColor}} className="span-tags"></span>
                <span style={{backgroundColor: props.mode? props.darkColor : props.lightColor}} className="span-tags"></span>
                <span style={{backgroundColor: props.mode? props.darkColor : props.lightColor}} className="span-tags"></span>
            </div>
        </button>
        <DropDown />
      </div>
      
    );
};

export const NakedButtonLink = (props) => {
    const [toggle, setToggle] = useState(false)
    return (
        <div 
            onMouseOver={() => setToggle(true)}
            onMouseOut={() => setToggle(false)}
            style={{transition: '3s easeOut', color: 'red', fontSize: '14px', fontWeight: '600', marginLeft: toggle? '10px' : '0px'}}>
            <a style={{color: 'red', marginRight: '10px'}} href={props.link}>{props.title}</a><ArrowRightOutlined />
        </div>
    )
}