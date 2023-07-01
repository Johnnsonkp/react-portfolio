import React, { Component } from "react";

class JobTitle extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Not Your Average Developer" };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.randomTitle(), 4000);
    this.clearId = setInterval(() => this.clearTitle(), 2000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
    clearInterval(this.clearId);
  }
  randomTitle() {
    let titles = [
      "I'm a freelancer",
      "I'm a developer",
      "I'm a designer",
      "I'm a creator",
      "I'm a professional",
    ];
    this.setState({
      title: titles[Math.floor(Math.random() * titles.length)],
    });
  }
  clearTitle() {
    document.querySelector(".transition-title").classList.toggle("hidden");
  }
  render() {
    const { title } = this.state;
    const spaceWithTitle = " " + title;
    return (
      <>
        {" "}
        <span
          style={{ color: this.props.lightColor }}
          onLoad={this.handleLoad}
          className="title-flrkr transition-title"
        >
          {spaceWithTitle}
        </span>
      </>
    );
  }
}

export default JobTitle;
