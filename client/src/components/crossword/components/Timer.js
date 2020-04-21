import React, { useEffect, useState } from 'react';
//import { Alert } from 'react-alert';

function Timer() {
  //const alert = Alert();
  const [counter, setCounter] = useState(1);
  const [stop, setstop] = useState(true);
  const [time, settime] = useState([]);

  // Third Attempts
  useEffect(() => {
    const timer = counter > 0 && stop && setInterval(() => setCounter(counter + 1), 1000);
    return () => clearInterval(timer);
  }, [counter, stop]);
  const onSubmitHandle = (e) => {
    e.preventDefault();
    setstop(!stop);
    settime([...time, counter]);
    console.log(time);
    alert(`Your score: ${counter}`);
    setTimeout(() => {
      window.location.href = '/';
    }, 500);
  };
  return (
    <div className='contanier'>
      <div className='mb-2'>Countdown: {counter}</div>
      <form onSubmit={onSubmitHandle}>
        <button className='btn btn-danger' type='submit' disabled={!stop}>
          Stop
        </button>
      </form>
    </div>
  );
}
export default Timer;
