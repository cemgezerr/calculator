import { useState } from "react";

import Button from "./components/Button";
import './App.css'
import Input from "./components/Input";
import * as math from "mathjs";


function App() {

  const [text,setText] = useState("")
  const [result,setResult] = useState("")

  const addToText = (val) => {
    setText((text) => text + val); 
  };

  const resetInput = () => {
    setText("")
    setResult("")
  }

  const calculateResult = () => {
    try {
      setResult(math.evaluate(text));
    } catch (error) {
      setResult("Hatalı giriş");
    }
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result}/>
        <div className="row">
        <Button symbol="7" handleClick={addToText}/>
        <Button symbol="8" handleClick={addToText}/>
        <Button symbol="9" handleClick={addToText}/>
        <Button symbol="/" color="#00AD85" handleClick={addToText}/>
        </div>
        <div className="row">
        <Button symbol="4" handleClick={addToText}/>
        <Button symbol="5" handleClick={addToText}/>
        <Button symbol="6" handleClick={addToText}/>
        <Button symbol="*" color="#00AD85" handleClick={addToText}/>
        </div>
        <div className="row">
        <Button symbol="3" handleClick={addToText}/>
        <Button symbol="2" handleClick={addToText}/>
        <Button symbol="1" handleClick={addToText}/>
        <Button symbol="+" color="#00AD85" handleClick={addToText}/>
        </div>
        <div className="row">
        <Button symbol="0" handleClick={addToText}/>
        <Button symbol="." color="#00AD85" handleClick={addToText}/>
        <Button symbol="=" color="#00AD85" handleClick={calculateResult} />
        <Button symbol="-" color="#00AD85" handleClick={addToText}/>
        </div>
        <Button symbol="clear" color="red" handleClick={resetInput}/>
      </div>
    </div>
  );
}

export default App;
