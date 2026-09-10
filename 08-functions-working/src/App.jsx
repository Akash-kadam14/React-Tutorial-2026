import React from 'react'

const App = () => {
  function btnCLicked () {
    console.log('Button clicked')
  }

  function onMouseOver () {
    console.log('Mouse over')
  }

  function handleInputChange(event) {
    console.log(event.target.value)
  }

  return (
    <div>App
       <button onDoubleClick={btnCLicked} onMouseOver={onMouseOver}>
         Click me
       </button>

       <button onClick={function() {
         console.log('Explore button clicked')
       }}> explore </button>
       <button onClick={() => {
         console.log('arrow button clicked')
       }}> arrow </button>

        <input type="text" placeholder="Enter text" 
            onChange={  function (event) {
                    handleInputChange(event)
  }} />
    </div>
   
  )
}

export default App