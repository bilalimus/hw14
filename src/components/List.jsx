import { Component } from "react";

class List extends Component {

  render() {
    return (
      <div className="list">
        <h3>{this.props.text}</h3>
      </div>
    );
  }
}

export default List;
