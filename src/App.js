import './App.css';
import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      informations : [],
      search: '',
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responses => responses.json())
    .then(users => this.setState({informations : users}))
  }
  changeHandle = e => {
    this.setState({search: e.target.value})
  }
  render() {
    const { informations, search} = this.state;
    const filteredInformation = informations.filter( information => 
      information.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Kalimi Monster</h1>
        <p className="subtitle">Built with React.js</p>
        <SearchBox 
        placeholder={"Search"}
        changeHandle = {this.changeHandle}
         />
        <CardList informations={filteredInformation} />
    </div>
    );
  }
}

export default App;
