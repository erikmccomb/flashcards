import React from 'react';

class CardForm extends React.Component {
  state = { front: '' } 
  
  addFlashCard = (e) => {
    e.preventDefault();
    this.props.addFlashCard(this.state.front);
    this.setState({ front: '' })
  }
  
  handleChange = (e) => {
    let { front, value } = e.target;
    this.setState({ [front]: value })
  }
  
  render () {
    return (
      <form onSubmit={this.addFlashCard}>
        <input front="front" value={this.state.front} onchange={this.handleChange} placeholder="Add a card topic"/>
        <input back="back" value={this.state.back} onchange={this.handleChange} placeholder="Add a topic definition"/>
      </form>
    )
  }
}

export default CardForm;


// import React from 'react';

// class TodoForm extends React.Component {
//   state = { name: '' } 

//   addTodo = (e) => {
//     e.preventDefault();
//     this.props.addTodoItem(this.state.name);
//     this.setState({ name: '' })
//   }

//   handleChange = (e) => {
//     let { name, value } = e.target;
//     this.setState({ [name]: value })
//   }

//   render() {
//     return (
//       <form onSubmit={this.addTodo}>
//         <input name="name" value={this.state.name} onChange={this.handleChange}
//           placeholder="Add a todo item" 
//         />
//       </form>
//     )
//   }
// }

// export default TodoForm;