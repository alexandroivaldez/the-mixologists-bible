import { click } from '@testing-library/user-event/dist/click';
import { wait } from '@testing-library/user-event/dist/utils';
import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import DrinkCard from './components/drink-card/drink-card.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      recipesFetched: false
    }
  }

  /*
  componentDidMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(response => response.json())
    .then(recipe => this.setState({ recipes: recipe }));
  }
  */

  searchHandler = (event) => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum')
      .then(response => response.json())
      .then(recipe => this.setState({ recipes: recipe}))
      .then(this.displayHandler);
  }

  displayHandler = () => {
    this.setState( () => {
      return { recipesFetched: true }
    })
    console.log("New Recipe State: " + this.state.recipes)
  }


  /*

  cardList = <div>
          <div className="card">
            <img src={this.state.recipes.drinks[0].strDrinkThumb} alt="huh?" />
            <h1  id="cardH1"> {this.state.recipes.drinks[0].strDrink} </h1>
            <p  id="cardP"> {this.state.recipes.drinks[0].idDrink} </p>
          </div>
          <div className="card">
            <img src={this.state.recipes.drinks[4].strDrinkThumb} alt="huh?" />
            <h1  id="cardH1"> {this.state.recipes.drinks[4].strDrink} </h1>
            <p  id="cardP"> {this.state.recipes.drinks[4].idDrink} </p>
          </div>
      </div>;
  */

  render() {

    let cardList = [];
    if (this.state.recipesFetched === true){
      console.log(this.state.recipes.length);
      for(let i = 0; i < this.state.recipes.length; i++){
        var temp = (<div className="card" key={Math.random()}>
        <img src={this.state.recipes.drinks[i].strDrinkThumb} alt="huh?" />
        <h1  id="cardH1"> {this.state.recipes.drinks[i].strDrink} </h1>
        <p  id="cardP"> {this.state.recipes.drinks[i].idDrink} </p>
      </div>);
        cardList.push(temp);
      }
    }
    return (
      <div className="App">
        <h1>The Mixologist's Codex</h1>
        <button onClick={this.searchHandler}>SEARCH</button>
        <h2>DRINKS</h2>
        {cardList}
      </div>
    );
  }
  
}

export default App;
