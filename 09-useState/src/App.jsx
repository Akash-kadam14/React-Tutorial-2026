import {useState} from 'react'


/**
 * 
 * useState is a React Hook that allows functional components to maintain state and update the UI when that state changes.
 * A normal local variable does not provide React-managed persistence or trigger a UI update when changed. useState provides a state value and a setter function. When the setter is called, React schedules a re-render and the component receives the updated state.
 * const [state, setState] = useState(initialValue);
 * 
 * const [count, setCount] = useState(0);

setCount(prev => prev + 1);

For example, I can use useState for a counter, form values, modal visibility, selected product, loading state, or logged-in user information.
 */
const App = () => {
  const [num, setNum] = useState(0);
  let  [arr, setArr] = useState([1, 2, 3, 4, 5]);
  let [obj, setObj] = useState({name: "John", age: 30});

  return (
    <div>
        <h1 id="counter">{num}</h1>
        <button onClick={() => setNum(prev => prev + 1)}>Increment</button>
        <button onClick={() => setNum(prev => prev - 1)}>Decrement</button>
        
        <h1>Array: {arr.join(", ")}</h1>
        <button onClick={() => setArr(prev => [...prev, prev.length + 1])}>Add to Array</button>
        <h1>Object: {JSON.stringify(obj)}</h1>
        <button onClick={() => setObj(prev => ({...prev, age: prev.age + 1}))}>Increment Age</button>
    </div>
  )
}

export default App