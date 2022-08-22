import { Component } from "react";
import "./App.css";
import Add from "./components/Add";
import List from "./components/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, text: "Some text" },
        { id: 2, text: "Some text2" },
      ],
    };
  }
  render() {
    const addHandler = (newData) => {
      this.setState((prevState) => {
        return {
          data: [...prevState.data, newData]
        }
      })
    }
    return (
      <div className="App">
        <Add addHandler={addHandler}/>
        {this.state.data.map((el) => {
          return <List id={el.id} text={el.text} key={el.id}/>;
        })}
      </div>
    );
  }
}

export default App;
