
import './App.css';
import React, { useState } from 'react';

function App() {
  
  const [counter, setCounter] = useState(0);
  console.log(counter)
  const [integer, setInteger] = useState(1);
  console.log(integer)

  const increase = () => {
    parseInt(integer)
    console.log(counter)
    setCounter(integer)
    console.log(integer) 
      // setInteger(integer + 1)
      setInteger(integer + counter) 
      console.log(setInteger)
    };
    
    const decrease = () => {
      setCounter(integer)
      parseInt(counter)
      parseInt(integer)
      setInteger(integer - counter)
      console.log(setInteger)
    };
    
    const reset = () => {
      setInteger(0)
    }

    const handleChange =(event) => {
      console.log(parseInt(event.target.value))
      setInteger(parseInt(event.target.value));
      parseInt(integer);
      console.log(integer)  
      parseInt(counter);
      console.log(counter)
      // setInteger(integer + counter) 
    }
  
    return (
      <div className="App">
        <h1>Example Counter</h1>
        <div>{integer}</div>
        <div className='btn-container'>
          <div>
            <button className='control-btn' onClick={increase}> + </button>
          </div>
          <div>
          <button className='control-btn' onClick={decrease}> - </button>
          </div>
          <button className='reset' onClick={reset}>
            Reset
          </button>
        </div>
          <br/>
          <label>
            Add :
            <input type="number" onChange={handleChange}/>
          </label>
      </div>
    );

}
export default App;