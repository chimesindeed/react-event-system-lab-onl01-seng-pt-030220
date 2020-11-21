// Code EyesOnMe Component Here
import React from 'react'
class EyesOnMe extends React.Component {
  const onBlur = () => {return console.log('Hey! Eyes on me!')}
  const onFocus = () => {return console.log('Good')}
  
  render = () => {
    return <button onBlur = {handleOnBlur} onFocus = {handleOnFocus}/>
}
}