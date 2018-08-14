import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';
import Loader from './components/Loader';

const API_KEY = 'e88bb1852406385e07de8a7e908f42fe';
class App extends Component {

  state = {
    recipes: [],
    loading: false
  }

  getRecipe = async (e) => {
    this.setState({ loading: true });
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const prefix = 'https://cors-anywhere.herokuapp.com/';
    const api_call = await fetch(`${prefix}http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=12`);

    const data = await api_call.json();
    this.setState({
      recipes: data.recipes,
      loading: false });
    console.log(this.state.recipes);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        {this.state.loading ? <Loader /> : <Recipes recipes={this.state.recipes} />}
      </div>
    );
  }
}

export default App;
