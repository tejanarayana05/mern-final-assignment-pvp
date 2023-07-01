import React, { useEffect, useState } from "react";
import axios from "axios";
import './leaderboard.css'
const Leaderboard = () => {
  const [memoryScores, setMemoryScores] = useState([]);
  const [responseScores, setResponseScores] = useState([]);

  useEffect(() => {
    // Fetch memory game scores
    axios
      .get("http://localhost:8000/memory")
      .then((response) => {
        setMemoryScores(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch response game scores
    axios
      .get("http://localhost:8000/response")
      .then((response) => {
        setResponseScores(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="leaderboard">
      <div className="leaderboard-tables">
      <h1 >Memory Game Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {memoryScores.map((score, index) => (
            <tr key={index}>
              <td>{score.name}</td>
              <td>{score.score}</td>
              <td>{score.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Response Game Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {responseScores.map((score, index) => (
            <tr key={index}>
              <td>{score.name}</td>
              <td>{score.score}</td>
              <td>{score.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Leaderboard;
