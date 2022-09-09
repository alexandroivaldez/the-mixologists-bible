import { click } from '@testing-library/user-event/dist/click';
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
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .then(response => response.json())
      .then(recipe => this.setState({ recipes: recipe }));
  }

  clickHandler = () => {
    console.log();
    alert(this.state.recipes.drinks[0].strDrink)
  }


  render() {
    return (
      <div className="App">
        <button onClick={this.clickHandler}>Test</button>
      </div>
    );
  }
  
}

export default App;
