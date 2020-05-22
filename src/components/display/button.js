import React from "react";

export class Button extends React.Component {
  onClick = (e) => {
    this.props.onClick(this.props.type);
  };

  render() {
    if (this.props.view === this.props.type) {
      return (
        <div className="selected">
          <button onClick={this.onClick}>{this.props.type}</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.onClick}>{this.props.type}</button>
        </div>
      );
    }
  }
}
