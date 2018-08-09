import React from 'react';
import Recipe from './Recipe';

const Recipes = props => (
  <div>
  { props.recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe} />) }
  </div>
)

export default Recipes;


/**/