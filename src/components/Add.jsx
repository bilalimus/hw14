import { Component } from "react";

class Add extends Component {
    constructor(){
        super()
        this.state = {inputValue: ''}
    }
  render() {
    const onChangeHandler = (e) => {
        console.log(e.target.value);
    }

    const addClickHandler = () => {
        let newData = {
            id: 3,
            text: 'Some text 3'
        }
        this.props.addHandler(newData)
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
