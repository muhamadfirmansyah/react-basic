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
  }

  // life cycle methods: methods that get called in different stages when components get rendered
  componentDidMount() { // when components get rendered for the first time
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <SearchBox placeholder="Search monster..." onChange={(e) => this.setState({ searchField: e.target.value })} />
        <CardList monsters={ filteredMonsters } />
      </div>
    )
  }
}

export default App;