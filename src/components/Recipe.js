import React from 'react';

const Recipe = props => {
 return (
  <div className="col-md-4">
    <div className="recipes__box">
      <img
        className="recipes__img"
        src={props.recipe.image_url}
        alt={props.recipe.title}
      />
      <div className="recipe__text">
        <h5 className="recipes__title">{ props.recipe.title }</h5>
        <p className="recipes__subtitle">
          Publisher:
            <a
              className="recipes__link"
              href={props.recipe.publisher_url}
              target="_blank">
                { props.recipe.publisher }
            </a>
        </p>
      </div>
      <button class="recipe__button">View recipe</button>
    </div>
  </div>
 )
}

export default Recipe;
