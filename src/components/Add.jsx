import { Component } from "react";
import classes from './Add.module.css'

class Add extends Component {
    constructor(){
        super()
        this.state = {inputValue: ''}
    }
  render() {
    const onChangeHandler = (e) => {
        this.setState(() => {
            return {
                inputValue: e.target.value 
            }
        })
    }

    const addClickHandler = () => {
        let newData = {
            id: Math.random(),
            text: this.state.inputValue
        }
        this.props.addHandler(newData)
        this.setState({inputValue: ''})
    }
    return (
      <div className={classes.add}>
        <input onChange={onChangeHandler} type="text" value={this.state.inputValue}/>
        <button onClick={addClickHandler}>ADD</button>
      </div>
    );
  }
}

export default Add;
