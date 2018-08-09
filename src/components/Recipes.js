import React from 'react';
import Recipe from './Recipe';

const Recipes = props => (
  <div className="container">
    <div className="row">
      {props.recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe} />)}
    </div>
  </div>
)

export default Recipes;
