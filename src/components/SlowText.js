import React, { useEffect, useState } from "react";
import "./SlowText.css";

const SlowText = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");
  const [restart, setRestart] = useState(true);

  useEffect(() => {
    let index = 0;
    let slowText = "";
    let decreaseIndex = text.length;
    if (restart) {
      let interval = setInterval(() => {
        slowText += text[index];
        setDisplayText(slowText);
        index++;
        if (index === text.length) {
          setRestart(false);
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }
    if (restart === false) {
      let interval = setInterval(() => {
        slowText = text.slice(0, decreaseIndex - 1);
        setDisplayText(slowText);
        decreaseIndex--;
        if (decreaseIndex === 1) {
          setRestart(true);
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }
  }, [text, speed, restart]);
  return <span className="slow-text">{displayText}</span>;
};

export default SlowText;
