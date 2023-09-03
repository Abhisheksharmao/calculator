import { useState } from 'react';
import React from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState("");

  const clickhandler = (Event) => {

    setResult(result.concat(Event.target.value))
  }
  const clear = () => {
    setResult("");
  }
  const calculate = () => {
    // eslint-disable-next-line
    setResult(eval(result));
  }

  return (
    <div className="calc">
      <input type="text" id="button1" placeholder='0' value={result} />
      <br />
      <br />
      <button id="button" value="clear" onClick={clear} >AC</button>
      <button id='button' value="%" onClick={clickhandler} >%</button>
      <button id='button' value="DE" onClick={e => setResult(result.slice(0, -1))} >DE</button>
      <button id="button" value="/" onClick={clickhandler} >/</button>
      <button id="button" value="7" onClick={clickhandler} >7</button>
      <button id="button" value="8" onClick={clickhandler} >8</button>
      <button id="button" value="9" onClick={clickhandler} >9</button>
      <button id="button" value="*" onClick={clickhandler} >*</button>
      <button id="button" value="4" onClick={clickhandler} >4</button>
      <button id="button" value="5" onClick={clickhandler} >5</button>
      <button id="button" value="6" onClick={clickhandler} >6</button>
      <button id="button" value="-" onClick={clickhandler} >-</button>
      <button id="button" value="1" onClick={clickhandler} >1</button>
      <button id="button" value="2" onClick={clickhandler} >2</button>
      <button id="button" value="3" onClick={clickhandler} >3</button>
      <button id="button" value="+" onClick={clickhandler} >+</button>
      <button id="button" value="0" onClick={clickhandler} >0</button>
      <button id="button" value="." onClick={clickhandler} >.</button>
      <button id="button2" value="=" onClick={calculate} >=</button>
    </div>
  );
}

export default App;
