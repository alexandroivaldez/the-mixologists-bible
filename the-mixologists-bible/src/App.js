import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
      .then(response => response.json())
      .then(recipe => this.setState({ recipes: recipe }));
      console.log(this.state.recipes);
  }

  render() {
    return (
      <div className="App">
        {console.log(this.state.recipes)}
      </div>
    );
  }
  
}

export default App;
