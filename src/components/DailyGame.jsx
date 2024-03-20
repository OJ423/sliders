import { Slider } from "@mui/material";
import { useEffect, useState } from "react";
import { sliderOneTargets, sliderTwoTargets, sliderThreeTargets, sliderFourTargets, sliderFiveTargets } from "./DailyTargets";
import { useNavigate } from "react-router-dom";

export default function DailyGame({ gameId, gameDay }) {
  const [sliderOneValue, setSliderOneValue] = useState(0);
  const [sliderTwoValue, setSliderTwoValue] = useState(0);
  const [sliderThreeValue, setSliderThreeValue] = useState(0);
  const [sliderFourValue, setSliderFourValue] = useState(0);
  const [sliderFiveValue, setSliderFiveValue] = useState(0);
  
  const [sliderOneTarget, setSliderOneTarget] = useState(sliderOneTargets[gameDay]);
  const [sliderTwoTarget, setSliderTwoTarget] = useState(sliderTwoTargets[gameDay]);
  const [sliderThreeTarget, setSliderThreeTarget] = useState(sliderThreeTargets[gameDay]);
  const [sliderFourTarget, setSliderFourTarget] = useState(sliderFourTargets[gameDay]);
  const [sliderFiveTarget, setSliderFiveTarget] = useState(sliderFiveTargets[gameDay]);
  
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [gameCount, setGameCount] = useState(0);
  const navigate = useNavigate()
  const [showTotal, setShowTotal] = useState(false)
  
  const handleSliderOneChange = (event, newValue) => {
    const roundScore = Math.round(newValue)
    setSliderOneValue(roundScore);
    setScore(Math.abs(roundScore - sliderOneTarget));
    if(roundScore > 0) {setGameCount((currentCount) => currentCount + 1)}
  };
  const handleSliderTwoChange = (event, newValue) => {
    const roundScore = Math.round(newValue)
    setSliderTwoValue(roundScore);
    setScore(Math.abs(roundScore - sliderTwoTarget));
    if(roundScore > 0) {setGameCount((currentCount) => currentCount + 1)}
  };
  const handleSliderThreeChange = (event, newValue) => {
    const roundScore = Math.round(newValue)
    setSliderThreeValue(roundScore);
    setScore(Math.abs(roundScore - sliderThreeTarget));
    if(roundScore > 0) { setGameCount((currentCount) => currentCount + 1)}
  };
  const handleSliderFourChange = (event, newValue) => {
    const roundScore = Math.round(newValue)
    setSliderFourValue(roundScore);
    setScore(Math.abs(roundScore - sliderFourTarget));
    if(roundScore > 0) {setGameCount((currentCount) => currentCount + 1)}
  };
  const handleSliderFiveChange = (event, newValue) => {
    const roundScore = Math.round(newValue)
    setSliderFiveValue(roundScore);
    setScore(Math.abs(roundScore - sliderFiveTarget));
    if(newValue > 0) {setGameCount((currentCount) => currentCount + 1)}
  };

  
  useEffect(() => {
    setTotalScore((currentTotal) => currentTotal + Math.round(score));
    if(gameCount === 5) {
      const gameStats = [gameId, totalScore + Math.round(score), 
        sliderOneTarget, sliderOneValue, Math.abs(sliderOneValue-sliderOneTarget),
        sliderTwoTarget, sliderTwoValue, Math.abs(sliderTwoValue-sliderTwoTarget),
        sliderThreeTarget, sliderThreeValue, Math.abs(sliderThreeValue-sliderThreeTarget),
        sliderFourTarget, sliderFourValue, Math.abs(sliderFourValue-sliderFourTarget),
        sliderFiveTarget, sliderFiveValue, Math.abs(sliderFiveValue-sliderFiveTarget),
      ]
      const gameStatArr = JSON.stringify(gameStats)
      localStorage.setItem('gameStats', gameStatArr)
      updateScoreHistory(totalScore)
      setGameCount(0)
      navigate("/stats")
    }
  }, [gameCount])
  
  const storedScoreHistory = localStorage.getItem('scoreHistory');
  let scoreHistory = storedScoreHistory ? JSON.parse(storedScoreHistory) : [];
  
  const updateScoreHistory = () => {
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
            <p className="slider-instruction">Slide to {sliderOneTarget}</p>
          ) : (
            <p className="slider-instruction">
              Target: {sliderOneTarget}. Attempt: {sliderOneValue}. Penalty:{" "}
              {Math.abs(sliderOneTarget - sliderOneValue)}
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
            <p className="slider-instruction">Slide to {sliderTwoTarget}</p>
          ) : (
            <p className="slider-instruction">
              Target: {sliderTwoTarget}. Attempt: {sliderTwoValue}. Penalty:{" "}
              {Math.abs(sliderTwoTarget - sliderTwoValue)}
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
            <p className="slider-instruction">Slide to {sliderThreeTarget}</p>
          ) : (
            <p className="slider-instruction">
              Target: {sliderThreeTarget}. Attempt: {sliderThreeValue}. Penalty:{" "}
              {Math.abs(sliderThreeTarget - sliderThreeValue)}
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
            <p className="slider-instruction">Slide to {sliderFourTarget}</p>
          ) : (
            <p className="slider-instruction">
              Target: {sliderFourTarget}. Attempt: {sliderFourValue}. Penalty:{" "}
              {Math.abs(sliderFourTarget - sliderFourValue)}
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
            <p className="slider-instruction">Slide to {sliderFiveTarget}</p>
          ) : (
            <p className="slider-instruction">
              Target: {sliderFiveTarget}. Attempt: {sliderFiveValue}. Penalty:{" "}
              {Math.abs(sliderFiveTarget - sliderFiveValue)}
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
