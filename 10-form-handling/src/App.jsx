import React from 'react'

const App = () => {
  function submitHandler(event) {
    // Prevent the default form submission behavior prevent the page from reloading
    event.preventDefault();
    console.log('Form submitted!');
  }
  return (
    <div>
      <form onSubmit={(event) => submitHandler(event)}>
        <input type="text" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App