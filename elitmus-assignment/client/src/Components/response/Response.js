import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Response.css";

const Response = (props) => {
  const [currentTime, setCurrentTime] = useState(30);
  const [squares, setSquares] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setSquares(Array.from({ length: 16 }));
  }, []);

  let timerId = null;
  let moveId = null;

  useEffect(() => {
    if (isActive) {
      timerId = setInterval(() => {
        setCurrentTime((currentTime) => currentTime - 1);
      }, 1000);
      moveId = setInterval(toggleColor, 500);
    }
    return () => {
      clearInterval(timerId);
      clearInterval(moveId);
    };
  }, [isActive]);

  useEffect(() => {
    if (currentTime === 0) {
      clearInterval(timerId);
      clearInterval(moveId);
    }
  }, [currentTime, timerId, moveId]);

  const startGame = () => {
    setIsActive(true);
  };

  const toggleColor = () => {
    document.querySelectorAll(".square").forEach((square) => {
      square.classList.remove("mole");
    });
    const randomIndex = Math.floor(Math.random() * 16);
    document.getElementById(randomIndex + 1).classList.toggle("mole");
  };

  const countClicks = (e) => {
    if (e.target.classList.contains("mole") && currentTime > 0) {
      setScore((score) => score + 1);
    }
  };

  const refresh = () => {
    window.location.reload();
  };

  const saveScore = () => {
    
    axios
      .post(`http://localhost:8000/response/${name}/${email}/${score}`) 
      .then(function (response) {
        console.log("User data saved successfully");
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="response-page">
      <h1>2. Response Test</h1>
      <p>
        Test your reflexes and click on the highlighted boxes as many times as
        you can in the given time.
      </p>
      {currentTime !== 0 && (
        <p>
          Time Left: <b>{currentTime}</b> s
        </p>
      )}
      <div className="grid">
        {squares.map((_, index) => (
          <div
            className="square"
            id={index + 1}
            key={index + 1}
            onClick={countClicks}
          ></div>
        ))}
      </div>
      {currentTime !== 0 && (
        <button onClick={startGame} className="start-btn">
          Start
        </button>
      )}

      {currentTime === 0 && (
        <div className="result-block">
          <h2>Game Over, your Score: {score}</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={refresh} className="start-btn">
            Restart
          </button>
          <button onClick={saveScore} className="start-btn">
            Save Score
          </button>
        </div>
      )}
    </div>
  );
};

export default Response;
