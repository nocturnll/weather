import React from "react";
import { Button } from "./button";
import "./nav.css";

export class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <Button
          onClick={this.props.onViewChange}
          view={this.props.view}
          type="Today"
        />
        <Button
          onClick={this.props.onViewChange}
          view={this.props.view}
          type="Tomorrow"
        />
        <Button
          onClick={this.props.onViewChange}
          view={this.props.view}
          type="Five Day Forecast"
        />
      </div>
    );
  }
}
