import { useState } from 'react';

function TimeElement() {
  const [time, setTime] = useState();

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div>
      <h2>It is {time}</h2>
    </div>
  );
}

export default TimeElement;
