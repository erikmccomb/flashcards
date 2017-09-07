import React from 'react';

const FlashCard = ({ id, front, back, onFlashCardClick, onDelete }) => (
  <li>
    <span onClick={() => onFlashCardClick(id)}>
      {back} 
    </span>
  </li>
)

export default FlashCard;