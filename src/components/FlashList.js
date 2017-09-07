import React from 'react';
import FlashCard from './FlashCard';

class FlashList extends React.Component{
  //render list of cards input by user - list of objects - loop
  render() {
    let cards = this.props.cards.map( (card) => {
      return ( 
        <FlashCard 
          key={card.id} 
          {...card} 
          onFlashCardClick={this.props.flashCardClick} 
          onDelete={this.props.onDelete}
        /> 
      )
    });

    return (
      <ul style={{ listStyle: 'none' }}>
        {cards}  
      </ul>
    )
  }
}

export default FlashList;