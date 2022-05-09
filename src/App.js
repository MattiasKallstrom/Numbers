import React, { useState } from "react";
import './index.css'

export default function App() {
  const [started, setStarted] = useState(false);
  const [status, setStatus] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [rightAnswer, setRightAnsweer] = useState(0);
  console.log(rightAnswer);

  const submit = (e) => {
    e.preventDefault();
    const formValid = +answer >= 0;
    if (!formValid) {
      return;
    }
    if (+answer === +rightAnswer) {
      setStatus("you got it");
      setStarted(false);
    } else if (+answer < +rightAnswer) {
      setStatus("too low");
    } else {
      setStatus("too high");
    }
  };

  const start = () => {
    setRightAnsweer(Math.ceil(Math.random() * 100));
    setStarted(true);
  };

  if (started) {
    return (
      <div className="bg-gray-800 text-white min-h-screen flex justify-center items-center">
        <form onSubmit={submit}>
          <div className="mb-10">
            <label>Answer <br></br></label>
            <input className="text-black"value={answer} onChange={(e) => setAnswer(e.target.value)} />
          </div>
          <button type="submit">Check</button>
        </form>
        <p>{status}</p>
      </div>
    );
  } else {
    return (
      <div className="h-10 w-20 border flex justify-center items-center bg-green-200">
        <button type="button" onClick={start}>
          start
        </button>
        <p>{status}</p>
      </div>
    );
  }
}