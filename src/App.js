
import './App.css';
import React, { useState } from 'react';

function App() {
  
  const [counter, setCounter] = useState(1);
  const [integer, setInteger] = useState(1);

    const increase = () => {
      if(integer >= 0) {
        setCounter(integer + counter)
        console.log(integer)
      }
      // else {
      //   setCounter(counter + 1) 
      // }  
    };
    
    const decrease = () => {
      if(integer >= 0) {
        setCounter(counter - integer)
        console.log(integer)
      }
      // setCounter(counter - 1)
    };
    
    const reset = () => {
      setCounter(0)
    }

    const handleChange =(event) => {
      setInteger(parseInt(event.target.value));
    }
  
    return (
      <div className="App">
        <h1>Example Counter</h1>
        <div>{counter}</div>
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
            <input type="number" onChange={handleChange} Value={integer} />
          </label>
      </div>
    )

}
export default App;