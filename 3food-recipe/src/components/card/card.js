import React from 'react';
import './card.style.css';

function Card({ recipe }) {
  const { label, image, url } = recipe.recipe;
  return (
    <div className='recipeCard'>
      <h4 className='recipeCard__title'>{label}</h4>
      <img
        className='recipeCard__image'
        src={image}
        alt={label}
        onClick={() => window.open(url)}
      />
    </div>
  );
}

export default Card;
