import React, { Component } from 'react';
import './App.css';
import Salem from './Media/SalemH.jpg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // Define the initial state with a person's profile, show flag, and time tracking.
      person: {
        fullName: 'Salem Hamis',
        bio: 'I turn your ideas into reality with code.',
        imgSrc: Salem,
        profession: 'Full-stack Developer (MERN)',
      },
      shows: false, // Initially, the profile is hidden.
      mountTime: new Date(),
      elapsedTime: 0,
    };
  }

  toggleProfile = () => {
     // Toggle the 'shows' state when the button is clicked.
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const elapsedTime = Math.floor(
        (new Date() - this.state.mountTime) / 1000
      );
      this.setState({ elapsedTime });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, shows, elapsedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleProfile}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time since mounting: {elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;
