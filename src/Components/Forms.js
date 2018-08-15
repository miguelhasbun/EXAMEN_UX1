import React from 'react';
const Form = (props) => {
  return (
      <form onSubmit={props.loadWeather}>
        <input type="text" name="Ciudad" placeholder="Ciudad" />
        <input type="text" name="Pais" placeholder="Pais..." />
        <button>Get Weather</button>
      </form>
  )
}
export default Form;