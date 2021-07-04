import React, {Component} from 'react';

class JobTitle extends Component {
    constructor(props){
        super(props);
        this.state = {title: "John Nkpolukwu"}  
    }
    componentDidMount(){
        this.intervalID = setInterval(() => this.randomTitle(), 4000);
        this.clearId = setInterval(() => this.clearTitle(), 2000);
    }
    componentWillUnmount(){
		clearInterval(this.intervalID);  
        clearInterval(this.clearId); 
	}
    randomTitle(){
        let titles = [
            "John Nkpolukwu",
            "a freelancer",
            "a student",
            "a designer",
            "a developer",
            "a creator",
            "a professional",
            'a UI Designer',
            "a UX Designer",
            "a programmer"
        ]
        this.setState({
            title: titles[Math.floor(Math.random() * titles.length)]
        });
    }
    clearTitle(){
        document.querySelector('.transition-title').classList.toggle('hidden')
    }
    render(){
        const {title} = this.state

        return title !== "John Nkpolukwu" ? 
            <> <span onLoad={this.handleLoad} className="title-flrkr transition-title">{title}</span></> : 
            <> <span onLoad={this.handleLoad} className="title-flrkr transition-title">{title}</span></>
    }    
}

export default JobTitle