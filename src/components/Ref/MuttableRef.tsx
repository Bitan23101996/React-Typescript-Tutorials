import React, { useState, useRef, useEffect } from "react";

const MuttableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      Hook Timer - {timer}
      <button type="button" onClick={stopTimer}>
        Stop
      </button>
    </div>
  );
};

export default MuttableRef;
