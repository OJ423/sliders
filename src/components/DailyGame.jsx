import { Slider } from "@mui/material";
import { useEffect, useState } from "react";
import { generateDailyTargets } from "./DailyTargets";
import { useNavigate } from "react-router-dom";
import React from "react"

export default function DailyGame({ gameId, gameDay }) {
// Users Scores
  const [sliderOneValue, setSliderOneValue] = useState(0);
  const [sliderTwoValue, setSliderTwoValue] = useState(0);
  const [sliderThreeValue, setSliderThreeValue] = useState(0);
  const [sliderFourValue, setSliderFourValue] = useState(0);
  const [sliderFiveValue, setSliderFiveValue] = useState(0);
// Target Generation
  const today = new Date();
  const target = generateDailyTargets(gameId, today,5, 1, 99);

  
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [gameCount, setGameCount] = useState(0);
  const navigate = useNavigate()
  const [showTotal, setShowTotal] = useState(false)
  
  const handleSliderOneChange = (event, newValue) => {
    const roundScore = Math.round(newValue)
    setSliderOneValue(roundScore);
    setScore(Math.abs(roundScore - target[0]));
    if(roundScore > 0) {setGameCount((currentCount) => currentCount + 1)}
  };
  const handleSliderTwoChange = (event, newValue) => {
    const roundScore = Math.round(newValue)
    setSliderTwoValue(roundScore);
    setScore(Math.abs(roundScore - target[1]));
    if(roundScore > 0) {setGameCount((currentCount) => currentCount + 1)}
  };
  const handleSliderThreeChange = (event, newValue) => {
    const roundScore = Math.round(newValue)
    setSliderThreeValue(roundScore);
    setScore(Math.abs(roundScore - target[2]));
    if(roundScore > 0) { setGameCount((currentCount) => currentCount + 1)}
  };
  const handleSliderFourChange = (event, newValue) => {
    const roundScore = Math.round(newValue)
    setSliderFourValue(roundScore);
    setScore(Math.abs(roundScore - target[3]));
    if(roundScore > 0) {setGameCount((currentCount) => currentCount + 1)}
  };
  const handleSliderFiveChange = (event, newValue) => {
    const roundScore = Math.round(newValue)
    setSliderFiveValue(roundScore);
    setScore(Math.abs(roundScore - target[4]));
    if(newValue > 0) {setGameCount((currentCount) => currentCount + 1)}
  };

  
  useEffect(() => {
    setTotalScore((currentTotal) => currentTotal + Math.round(score));
    if(gameCount === 5) {
      const gameStats = [gameId, totalScore + Math.round(score), 
        target[0], sliderOneValue, Math.abs(sliderOneValue-target[0]),
        target[1], sliderTwoValue, Math.abs(sliderTwoValue-target[1]),
        target[2], sliderThreeValue, Math.abs(sliderThreeValue-target[2]),
        target[3], sliderFourValue, Math.abs(sliderFourValue-target[3]),
        target[4], sliderFiveValue, Math.abs(sliderFiveValue-target[4]),
      ]
      const gameStatArr = JSON.stringify(gameStats)
      localStorage.setItem('gameStats', gameStatArr)
      updateScoreHistory(totalScore)
      updateLowScores()
      setGameCount(0)
      navigate("/stats")
    }
  }, [gameCount])
  
  const storedScoreHistory = localStorage.getItem('scoreHistory');
  let scoreHistory = storedScoreHistory ? JSON.parse(storedScoreHistory) : [];
  
  const updateScoreHistory = (totalScore) => {
    if (totalScore+score === 0) {
      scoreHistory[0] = (scoreHistory[0] || 0) + 1;
    } else if (totalScore+score>= 1 && (totalScore+score)<= 5) {
      scoreHistory[1] = (scoreHistory[1] || 0) + 1;
    } else if (totalScore+score>= 6 && totalScore+score<= 10) {
      scoreHistory[2] = (scoreHistory[2] || 0) + 1;
    } else if (totalScore+score>= 11 && totalScore+score<= 15) {
      scoreHistory[3] = (scoreHistory[3] || 0) + 1;
    } else if (totalScore+score>= 16 && totalScore+score<= 20) {
      scoreHistory[4] = (scoreHistory[4] || 0) + 1;
    } else {
      scoreHistory[5] = (scoreHistory[5] || 0) + 1;
    }
  
    localStorage.setItem('scoreHistory', JSON.stringify(scoreHistory));
  };

  const storedLowScores = localStorage.getItem("lowScores");
  let lowScores = storedLowScores ? JSON.parse(storedLowScores) : [];

  const updateLowScores = () => {
    if (totalScore+score > 5) return;
    else if (totalScore+score === 0) lowScores[0] = (lowScores[0] || 0) + 1;
    else if (totalScore+score === 1) lowScores[1] = (lowScores[1] || 0) + 1;
    else if (totalScore+score === 2) lowScores[2] = (lowScores[2] || 0) + 1;
    else if (totalScore+score === 3) lowScores[3] = (lowScores[3] || 0) + 1;
    else if (totalScore+score === 4) lowScores[4] = (lowScores[4] || 0) + 1;
    else if (totalScore+score === 5) lowScores[5] = (lowScores[5] || 0) + 1;

    localStorage.setItem("lowScores", JSON.stringify(lowScores))
  }
  
  useEffect(() => {
    const storedGameStatsString = localStorage.getItem('gameStats');
    const storedGameStatsArr = JSON.parse(storedGameStatsString);
    if(storedGameStatsArr) {
      if(storedGameStatsArr[0] === gameId){
        setSliderOneValue(storedGameStatsArr[3])
        setSliderTwoValue(storedGameStatsArr[6])
        setSliderThreeValue(storedGameStatsArr[9])
        setSliderFourValue(storedGameStatsArr[12])
        setSliderFiveValue(storedGameStatsArr[15])
        setShowTotal(storedGameStatsArr[1])
      }
    }
  })
  return (
    <>
      <section className="game-container">
        <h1 className="page-header">Daily game</h1>
        <section className="slider-container">
          {sliderOneValue === 0 ? (
            <p className="slider-instruction">Slide to {target[0]}</p>
          ) : (
            <p className="slider-instruction">
              Target: {target[0]}. Attempt: {sliderOneValue}. Penalty:{" "}
              {Math.abs(target[0] - sliderOneValue)}
            </p>
          )}
          <h4>1.</h4>
          {sliderOneValue === 0 ? (
            <Slider
              className="slider"
              aria-label="Slider 1"
              step={0.1}
              valueLabelDisplay="off"
              color="success"
              min={0}
              max={100}
              onChangeCommitted={handleSliderOneChange}
            />
          ) : (
            <>
              <Slider
                className="slider"
                valueLabelDisplay="off"
                defaultValue={sliderOneValue}
                disabled
                min={0}
                max={100}
              />
            </>
          )}
        </section>

        <section className="slider-container">
          {sliderTwoValue === 0 ? (
            <p className="slider-instruction">Slide to {target[1]}</p>
          ) : (
            <p className="slider-instruction">
              Target: {target[1]}. Attempt: {sliderTwoValue}. Penalty:{" "}
              {Math.abs(target[1] - sliderTwoValue)}
            </p>
          )}
          <h4>2.</h4>
          {sliderTwoValue === 0 ? (
            <Slider
              className="slider"
              aria-label="Slider 2"
              step={0.1}
              valueLabelDisplay="off"
              color="primary"
              min={0}
              max={100}
              onChangeCommitted={handleSliderTwoChange}
            />
          ) : (
            <>
              <Slider
                className="slider"
                valueLabelDisplay="off"
                defaultValue={sliderTwoValue}
                disabled
                min={0}
                max={100}
              />
            </>
          )}
        </section>

        <section className="slider-container">
          {sliderThreeValue === 0 ? (
            <p className="slider-instruction">Slide to {target[2]}</p>
          ) : (
            <p className="slider-instruction">
              Target: {target[2]}. Attempt: {sliderThreeValue}. Penalty:{" "}
              {Math.abs(target[2] - sliderThreeValue)}
            </p>
          )}
          <h4>3.</h4>
          {sliderThreeValue === 0 ? (
            <Slider
              className="slider"
              aria-label="Slider 3"
              step={0.1}
              valueLabelDisplay="off"
              color="secondary"
              min={0}
              max={100}
              onChangeCommitted={handleSliderThreeChange}
            />
          ) : (
            <>
              <Slider
                className="slider"
                valueLabelDisplay="off"
                defaultValue={sliderThreeValue}
                disabled
                min={0}
                max={100}
              />
            </>
          )}
        </section>

        <section className="slider-container">
          {sliderFourValue === 0 ? (
            <p className="slider-instruction">Slide to {target[3]}</p>
          ) : (
            <p className="slider-instruction">
              Target: {target[3]}. Attempt: {sliderFourValue}. Penalty:{" "}
              {Math.abs(target[3] - sliderFourValue)}
            </p>
          )}
          <h4>4.</h4>
          {sliderFourValue === 0 ? (
            <Slider
              className="slider"
              aria-label="Slider 4"
              step={0.1}
              valueLabelDisplay="off"
              color="error"
              min={0}
              max={100}
              onChangeCommitted={handleSliderFourChange}
            />
          ) : (
            <>
              <Slider
                className="slider"
                valueLabelDisplay="off"
                defaultValue={sliderFourValue}
                disabled
                min={0}
                max={100}
              />
            </>
          )}
        </section>

        <section className="slider-container" style={{marginBottom:30}}>
          {sliderFiveValue === 0 ? (
            <p className="slider-instruction">Slide to {target[4]}</p>
          ) : (
            <p className="slider-instruction">
              Target: {target[4]}. Attempt: {sliderFiveValue}. Penalty:{" "}
              {Math.abs(target[4] - sliderFiveValue)}
            </p>
          )}
          <h4>5.</h4>
          {sliderFiveValue === 0 ? (
            <Slider
              className="slider"
              aria-label="Slider 5"
              step={0.1}
              valueLabelDisplay="off"
              color="warning"
              min={0}
              max={100}
              onChangeCommitted={handleSliderFiveChange}
            />
          ) : (
            <>
              <Slider
                className="slider"
                valueLabelDisplay="off"
                defaultValue={sliderFiveValue}
                disabled
                min={0}
                max={100}
              />
            </>
          )}
        </section>
        {showTotal ? <p style={{fontWeight:600}}>Your score is {showTotal}</p> : null}
        <p>0-100. Slide to the target and avoid penalty points. Aim low.</p>
        <p>{`The game is updated daily. Return tomorrow to see if you can beat today's score.`}</p>
      </section>
    </>
  );
}
