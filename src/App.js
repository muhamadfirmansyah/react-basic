import React from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  // life cycle methods: methods that get called in different stages when components get rendered
  componentDidMount() { // when components get rendered for the first time
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div className="App">
        <input 
          type="search" 
          placeholder="Search monster..." 
          onChange={(e) => this.setState({ searchField: e.target.value }, () => {
            console.log(this.state.searchField)
          })} />
        <CardList monsters={this.state.monsters} />
      </div>
    )
  }
}

export default App;