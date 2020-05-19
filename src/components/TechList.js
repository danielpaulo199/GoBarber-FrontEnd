import React, { Component } from "react";
class TechList extends Component {
  state = {
    techs: ["Node Js", "React Js", "React Native"]
  };
  render() {
    return (
      <ul>
        <li>Node Js</li>
        <li>React Js</li>
        <li>Reactive Native</li>
      </ul>
    );
  }
}

export default TechList;
