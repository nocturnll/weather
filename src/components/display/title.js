import React from "react";
import "./title.css";
import { Randomizer } from "./randomizer";
import { Nav } from "./nav";

export class Title extends React.Component {
  render() {
    if (this.props.view === "Today" || this.props.view === "Tomorrow") {
      return (
        <div className="title">
          What's the weather like <br />
          <span className="view">{this.props.view.toLowerCase()}</span> in{" "}
          <span className="city">
            {this.props.city}, {this.props.country}?
            <br />
          </span>
          <div className="navbar">
            <Randomizer onChange={this.props.onRandom} />
            <Nav
              view={this.props.view}
              onViewChange={this.props.onViewChange}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="title">
          What's the five day <br />
          forecast in{" "}
          <span className="city">
            {this.props.city}, {this.props.country}?
            <br />
          </span>
          <div className="navbar">
            <Randomizer onChange={this.props.onRandom} />
            <Nav
              view={this.props.view}
              onViewChange={this.props.onViewChange}
            />
          </div>
        </div>
      );
    }
  }
}
