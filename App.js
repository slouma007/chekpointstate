import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'attia abdesslem',
      bio: 'web devoloper',
      imgSrc: 'profile.jpg',
      profession: 'Developer',
    },
    show: false,
    intervalId: null,
    mountedTime: null,
  };

  componentDidMount() {
    this.setState({ mountedTime: new Date() });

    // Start the interval to update the time every second
    const intervalId = setInterval(() => {
      this.setState({}); // Just to force a re-render
    }, 1000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, mountedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Mounted since: {mountedTime && (new Date() - mountedTime) / 1000} seconds</p>
      </div>
    );
  }
}

export default App;
