import { Component } from 'react';
import './App.css';
import Add from './components/Add';
import List from './components/List';

class App extends Component{
  
  render() {
    return (
      <div class="App">
        <Add />
        <List />
      </div>
    )
  }
}



export default App;
