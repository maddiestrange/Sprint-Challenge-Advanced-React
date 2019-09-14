import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerCards from './components/PlayerCards';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
     players: []
    };
  }

  componentDidMount() {
    this.callAPI();
    console.log('name:', this.state.name)
    console.log('followers:', this.state.followers)
  }

  callAPI = () => {
    axios
    .get(`http://localhost:5000/api/players`)
    .then(data => {
      this.setState({
          players: data.data
          })})
      .catch(err => {
          console.log(err);
      });
  };

  render() {
    return (
      <div>
        <PlayerCards data={this.state.players}/>
      </div>
    );
  }
}


export default App;
