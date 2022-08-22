import { Component } from "react";

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
      <>
        <input onChange={onChangeHandler} type="text" value={this.state.inputValue}/>
        <button onClick={addClickHandler}>add</button>
      </>
    );
  }
}

export default Add;
