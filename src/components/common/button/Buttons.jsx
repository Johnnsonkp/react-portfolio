import './Button.css'

import { Button, Drawer, Radio, Space } from 'antd';

import {Link} from 'react-router-dom'
import { useState } from 'react';

export const PrimaryButton = (props) => {
    const styles = {
        button:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f6004c',
            padding: '0.6rem calc(5px + 1.6vw)',
            color: '#fff',
            fontWeight: 700,
            fontSize: '0.9rem',
            boxShadow: '10px 10px 12px 0 rgb(0 0 0 / 22%)',
            letterSpacing: '.5px',
            textTransform: 'uppercase',
            transition: '250ms ease-out',
            marginTop: '20px',
            border: 'none',
            cursor: 'pointer',
            lineHeight: '1.6',
            minWidth: '180px',
            margin: 'auto',
            transition: 'all 250ms ease-out 0s'
        }
    }


    return (
        <button 
            style={styles.button}
            href={props.link}
            className={props.pulse? 'pulse-effect' : null}
        >
            <Link to="/contact">{props.title}</Link> 
        </button>
    )
}

export const HamburgerMenu = () => {
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
                <span className="span-tags"></span>
                <span className="span-tags"></span>
                <span className="span-tags"></span>
            </div>
        </button>
        <DropDown />
      </div>
      
    );
};