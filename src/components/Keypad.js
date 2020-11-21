// Code Keypad Component Here
import React from 'react'

class EyesOnMe extends React.Component {

  handleKeyUp = () => {
    return console.log('Entering password . . .')
  }
  render = () => {
    return <input type="password" onKeyUp={this.handleKeyUp}/>
  }
}