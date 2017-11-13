import React, { Component } from "react";
import logo from "./logo.svg";
import { InfoBox } from "./components/InfoBox";
import { CollapseBox } from "./components/CollapseBox";
import { SimpleTable } from "./components/SimpleTable";
import { CustomNav } from "./components/CustomNav";
import { IconButton, ImageButton , TextButton } from './components/Buttons';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">React AdminLTE</h1>
        <CustomNav />
        </header>
        <h2>Buttons</h2>
        <div className="buttonWrapper">
          <IconButton />
          <TextButton />
          <ImageButton />
        </div>
        <h2>Collapseable Boxes</h2>
        <div className="wrapper">
          <CollapseBox
            className="collapseBox1"
            text={{ title: "Collapseable", bodyText: "Hello" }}
            type="warning"
          />
          <CollapseBox
            className="collapseBox2"
            text={{ title: "Collapseable", bodyText: "How are you?" }}
            type="primary"
          />
          <CollapseBox
            className="collapseBox3"
            text={{ title: "Collapseable", bodyText: "Goodbye" }}
            type="success"
          />
        </div>
        <h2>Info Boxes</h2>
        <div className="wrapper">
          <InfoBox className="infoBox" icon={logo} text="Email" color="red" />
          <InfoBox
            className="infoBox2"
            icon={logo}
            text="Messages"
            color="aqua"
          />
          <InfoBox
            className="infoBox3"
            icon={logo}
            text="Calls"
            color="green"
          />
        </div>
        <h2>Table</h2>
        <div className="wrapper">
          <SimpleTable className="simpleTable" />
        </div>
      </div>
    );
  }
}

export default App;
