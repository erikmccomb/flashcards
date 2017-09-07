import React from 'react'
import FlashList from './FlashList';
import CardForm from './CardForm';

class FlashApp extends React.Component {
  state = { cards: [], id: 0 }

  addCard = (name) => {
    let { items, id } = this.state;
    let todo = { name, id }
    this.setState({ 
      items: [...items, todo],
      id: id + 1
    });
  }

  todoClick = (id) => {
    let items = this.state.items.map( item => {
      if (item.id === id) 
        return { ...item, complete: !item.complete }
      return item
    });

    this.setState({ items });
  }

  onDelete = (id) => {
    let items = this.state.items.filter( item => item.id !== id )
    this.setState({ items });
  }

  render() {
    return (
      <div>
        <CardForm addFlashCard={this.addCard} />
        <FlashList
          cards={this.props.cards} 
          todoClick={this.todoClick} 
          onDelete={this.onDelete}
        />
      </div>
    )
  }
}

export default FlashApp;
