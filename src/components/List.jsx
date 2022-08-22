import { Component } from "react";
import classes from './List.module.css'

class List extends Component {

  render() {
    const onClickHandler = () => {
        this.props.deleteHandler(this.props.id)
    }
    return (
      <div onClick={onClickHandler} className={classes.list}>
        <h3>{this.props.text}</h3>
      </div>
    );
  }
}

export default List;
