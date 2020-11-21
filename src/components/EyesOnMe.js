// Code EyesOnMe Component Here
import React from 'react'
class EyesOnMe extends React.Component {
  onBlur = () => {return console.log('Hey! Eyes on me!')}
  onFocus = () => {return console.log('Good')}
  
  render = () => {
    return <button onBlur = {handleOnBlur} onFocus = {handleOnFocus}/>
}
}