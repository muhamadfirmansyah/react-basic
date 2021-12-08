import React from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };

    // binding class method
    // For a given function, creates a bound function that has the same body
    // as the original function. The this object of the bound function is associated 
    // with the specified object, and has the specified initial parameters.
    // this.handleChange = this.handleChange.bind(this)
  }

  // life cycle methods: methods that get called in different stages when components get rendered
  componentDidMount() { // when components get rendered for the first time
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  // Class Methods
  // handleChange(e) {
  //   this.setState({ searchField: e.target.value});
  // }

  // Arrow Function
  // Don't have to binding the method, it's automatically scoped into windows object.
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }
  
  render() {
    
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder="Search monster..." 
          onChange={this.handleChange} />
        <CardList monsters={ filteredMonsters } />
      </div>
    )
  }
}

export default App;