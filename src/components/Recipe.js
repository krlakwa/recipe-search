import React from 'react';

const Recipe = props => {
 return (
  <div>
    <img src={props.recipe.image_url} alt={props.recipe.title} />
    <p>{ props.recipe.title }</p>
  </div>
 )
}

export default Recipe;
