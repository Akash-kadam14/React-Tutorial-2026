what is react js - js library to create dynamic and reusable UI, by breaking it UI into resulable component.
improves performance using virtual dom , where only chnaged part gets updated instead of reloading the whole page

vite - used to create folder structure for raw react app --> npm create vite

fragements - empty tags <> </> used to return a multiple elements from function by bundle them into that empty tags

eg.
const App = () => {
return (

<div id = 'dad'>
App
<h1>Hello</h1>
<h2>akash</h2>
</div>
<div id = 'uncle'></div> we cannot do this instead we do this

    <>
    <div id = 'dad'>
      App
      <h1>Hello</h1>
      <h2>akash</h2>
    </div>
    <div id = 'uncle'></div>
    </>

);
};

export default App;

components -- is a reusable and independant piece of UI code to build parts of an app
eg. Navbar can be one component
Product card can be another component
Footer can be another component
These components can be reused across the application.
eg-- Card.jsx -- function Card() {
const userName = 'Akash'
return (

  <div>
  <h1>Hi i am {username} // to print the dynamic value we use {}
  </div>
  )
}

export default App
