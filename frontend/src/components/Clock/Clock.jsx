import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, SetCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      SetCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: "long",
    };
    return date.toLocaleDateString(undefined, options);
  };
  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div>
      <span>{formatTime(currentTime)}</span>
      <span>{formatDate(currentTime)}</span>
    </div>
  );
};

export default Clock;
