import React, {Component} from 'react'
import './LightDark.css';
import './index.js';

class LightDark extends Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const dayNightBtn = document.getElementById('day-night-btn');
        const DayNightMode = dayNightBtn.classList[0];
        const block = document.querySelector('.block')
        let LightWhite = "#f4f4f4";
        const DarkColorAlternate = "#111111c7"

        const DayMode = () => {
          // block.style.backgroundColor = LightColor
          dayNightBtn.classList.remove('light')
          dayNightBtn.classList.add('dark')
          dayNightBtn.classList.add('pulseDayNight')
          dayNightBtn.style.backgroundImage = "/public/sun.svg"
          // document.getElementById('home-section').style.backgroundColor = LightWhite
          // document.body.style.backgroundColor = "#40434e75"
          document.body.classList.add('LightColor')
          // document.body.style.color = DarkColour
          document.body.style.color = "#111111"
          document.getElementById('about').classList.add('LightColor') 
          document.getElementById('blogSection').classList.add('LightColor')
          // document.getElementById('blogSection').style.backgroundColor = LightColorAlternate
          document.getElementById('portfolio').classList.add('LightColor')
          document.querySelectorAll('hr').forEach((singleHr) => {
            if(singleHr.className !== 'contact-hr'){
              singleHr.style.filter = "invert(1)"
            }
          })
          document.querySelectorAll('.titleBig').forEach((title) => {
            title.style.filter = "invert(1)"
          })
          
          console.log("dark")
        }
        const NightMode = () => {
          // Landing page Block color
          block.style.backgroundColor = "#111111"

          //button functionalities
          dayNightBtn.classList.add('light')
          dayNightBtn.classList.remove('dark')
          dayNightBtn.classList.remove('pulseDayNight')

          dayNightBtn.style.backgroundImage = "/public/moon-pic.svg"

          // body background color & text color
          document.body.classList.remove('LightColor')
          document.body.style.backgroundColor = "#111111"
          document.body.style.color = LightWhite
          
          // About section dark mode 
          document.getElementById('about').classList.remove("LightColor")
          document.getElementById('about').classList.add('darkColor')
          // document.getElementById('about').style.backgroundColor = "#40434e75"

          // Portfolio section dark mode
          document.getElementById('portfolio').classList.remove("LightColor")
          document.getElementById('portfolio').style.backgroundColor = DarkColorAlternate


          // document.body.style.backgroundColor = "#40434e75"
          // document.getElementById('about').style.backgroundColor = DarkColour

          document.getElementById('blogSection').classList.remove("LightColor")
          // document.getElementById('blogSection').style.backgroundColor = DarkColour
          document.getElementById('blogSection').classList.add('darkColor')


          document.querySelectorAll('.titleBig').forEach((title) => {
            title.style.filter = "none"
          })
          document.querySelectorAll('hr').forEach((singleHr) => {
            singleHr.style.filter = "none"
          })
          // document.querySelector('hr').style.backgroundColor = LightColor
          console.log("light")
        }

        DayNightMode === "light" ? DayMode() : NightMode()  
    }
    render() {
      return <div className="light" id="day-night-btn" onClick={this.handleClick}></div>
    }
}
  



export default LightDark