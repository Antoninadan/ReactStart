import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import axios from 'axios';

// Styled Components / CSS modules / JSS
// const styles = {}

class App extends React.Component {
  // constructor (props) {
  //   super(props);

  //   this.state = {...}

      //  this.incrementUserAge = this.incrementUserAge.bind(this)
  // }

  state = {
    title: 'Hello world - my title',
    currentUser: {
      name: 'Andrew',
      age: 31
    },
    emails: []
  }

  componentDidMount() {
    axios('/emails')
      .then(res => this.setState({emails: res.data}));
  }

  componentDidUpdate() {
    console.log('App.js updated');
  }

  incrementUserAge = () => {
    const user = this.state.currentUser;
    const newUser = {...user, age: user.age + 1};

    this.setState({currentUser: newUser})
  }

  changeTitle = () => {
    this.setState({title: 'New title'});
  }

  render() {
    const { currentUser, title, emails } = this.state;

    // console.log('App.js is (re)rendered');

    return (
      <div className="app">
        <button onClick={this.changeTitle}>Change title</button>
        <Header user={currentUser} title={title} />
        <Body emails={emails} />
        <Footer incrementAge={this.incrementUserAge} />
      </div>
    )
  }
}

export default App;
