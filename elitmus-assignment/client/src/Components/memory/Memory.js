import axios from "axios";
import { useEffect, useState } from "react";
import "./Memory.css";

const Memory = (props) => {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [display, setDisplay] = useState(false);
  const [userInput, setUserInput] = useState(null);
  const [accuracy, setAccuracy] = useState(0);
  const [accDisplay, setAccDisplay] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://random-word-api.vercel.app/api",
      params: { words: "20" },
    };

    axios
      .request(options)
      .then(function (response) {
        setWords(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const displayWords = () => {
    setDisplay(true);
    const interval = setInterval(() => {
      if (currentIndex < words.length) {
        setCurrentIndex((currentIndex) => currentIndex + 1);
      }
    }, 900);
    return () => clearInterval(interval);
  };

  const calculateAccuracy = () => {
    setAccDisplay(false);
    let acc = 0;
    words.forEach((element) => {
      if (userInput !== null && userInput.toLowerCase().includes(element)) {
        acc = acc + 1;
      }
    });
    setAccuracy(acc);
  };

  const saveScore = () => {

    


    axios
      .post(`http://localhost:8000/memory/${name}/${email}/${accuracy}`)
      .then(function (response) {
        console.log("User data saved successfully");
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const refresh = () => {
    window.location.reload(true);
  };

  return (
    <div className="memory-block">
      <h1>1. Memory Test</h1>
      <p id="description">
        In this test, you will see about twenty words, each for a short amount
        of time. Try to memorize as many as you can. Order and case don't
        matter. Separate words by space or newlines.
      </p>
      <p id="description">
        Note: This test is not timed, but you will have to wait for the words to
        appear. If words don't appear, please refresh the page. It might be some
        issue from our side.
      </p>

      <div>
        {display && currentIndex < words.length && (
          <div>
            <p className="word-display">{words[currentIndex]}</p>
          </div>
        )}
      </div>
      {currentIndex <= words.length && (
        <button onClick={displayWords} className="memory-btn">
          {display && currentIndex < words.length ? "Memorize..." : "Start Test"}
        </button>
      )}

      {currentIndex > words.length && (
        <div className="check-block">
          <textarea
            onChange={(e) => setUserInput(e.target.value)}
            id="userinput"
            placeholder="Write down as many words as you remember. Order and case don't matter. Separate words by space or newlines."
          ></textarea>
          {accDisplay && (
            <button className="memory-btn" onClick={calculateAccuracy}>
              Show Accuracy
            </button>
          )}

          {!accDisplay && <h2>Your accuracy is {accuracy} out of 20</h2>}

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

          <button className="memory-btn" onClick={refresh}>
            Restart
          </button>
          <button className="memory-btn" onClick={saveScore}>
            Save Score
          </button>
        </div>
      )}
    </div>
  );
};

export default Memory;
