import React, { Component } from "react";
let titleIndexArr = [];
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
    let titles = ["I'm a developer", "I'm a designer", "I'm a creator"];
    let titleIndex = Math.floor(Math.random() * titles.length);

    titleIndexArr.unshift(titleIndex);
    titleIndexArr.length > 3 && titleIndexArr.pop();

    console.log("titleIndexArr", titleIndexArr);
    this.setState({
      // title: titles[Math.floor(Math.random() * titles.length)],

      title:
        titles[
          titleIndexArr[0] !== titleIndexArr[1]
            ? titleIndexArr[0]
            : Math.floor(Math.random() * titles.length)
        ],
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
