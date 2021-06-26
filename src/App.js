
import './App.css';

import { connect } from 'react-redux'
import React from 'react';
import { AGE_DOWN, AGE_UP } from './actions';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header description = 'Redux Demo'/>
        <span>Age of the person: { this.props.age }</span>
        <div>
          <button onClick = { this.props.onAgeUp } >Age Up</button>
          <button onClick = { this.props.onAgeDown }>Age Down</button>
        </div>
      </div>
    );
  }
}

//component state map to props
const mapStateToProps = state => {
  return {
    age: state.age
  };
};

/* onAgeUp and onAgeDown are two memthods on component properties
 onAgeUp dispatches an event to Redux reducer
*/
const mapDispatchToProps = dispatch => {
  return {
    onAgeUp : () => dispatch({ type: AGE_UP, value: 2 }),
    onAgeDown : () => dispatch({ type: AGE_DOWN, value: 2 })
  };
};


//connect(mapStateToProps, mapDispatchToProps)(ComponentName)

export default connect(mapStateToProps, mapDispatchToProps)(App)

