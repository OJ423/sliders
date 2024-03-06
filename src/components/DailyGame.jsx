import { Box, Icon, Modal, Slider } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { sliderOneTargets, sliderTwoTargets, sliderThreeTargets, sliderFourTargets, sliderFiveTargets } from "./DailyTargets";

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
  const [open, setOpen] = useState(false);

  const handleSliderOneChange = (event, newValue) => {
    setSliderOneValue(newValue);
    setScore(Math.abs(newValue - sliderOneTarget));
    setGameCount((currentCount) => currentCount + 1);
  };
  const handleSliderTwoChange = (event, newValue) => {
    setSliderTwoValue(newValue);
    setScore(Math.abs(newValue - sliderTwoTarget));
    setGameCount((currentCount) => currentCount + 1);
  };
  const handleSliderThreeChange = (event, newValue) => {
    setSliderThreeValue(newValue);
    setScore(Math.abs(newValue - sliderThreeTarget));
    setGameCount((currentCount) => currentCount + 1);
  };
  const handleSliderFourChange = (event, newValue) => {
    setSliderFourValue(newValue);
    setScore(Math.abs(newValue - sliderFourTarget));
    setGameCount((currentCount) => currentCount + 1);
  };
  const handleSliderFiveChange = (event, newValue) => {
    setSliderFiveValue(newValue);
    setScore(Math.abs(newValue - sliderFiveTarget));
    setGameCount((currentCount) => currentCount + 1);
  };

  useEffect(() => {
    setTotalScore((currentTotal) => currentTotal + score);
  }, [gameCount]);

  useEffect(() => {
    if(gameCount === 5) {
      setOpen(true)
      console.log(totalScore, "<-------Total Score")
      const gameStats = [gameId, totalScore, 
        sliderOneTarget, sliderOneValue, Math.abs(sliderOneValue-sliderOneTarget),
        sliderTwoTarget, sliderTwoValue, Math.abs(sliderTwoValue-sliderTwoTarget),
        sliderThreeTarget, sliderThreeValue, Math.abs(sliderThreeValue-sliderThreeTarget),
        sliderFourTarget, sliderFourValue, Math.abs(sliderFourValue-sliderFourTarget),
        sliderFiveTarget, sliderFiveValue, Math.abs(sliderFiveValue-sliderFiveTarget),
      ]
      const gameStatArr = JSON.stringify(gameStats)
      localStorage.setItem('gameStats', gameStatArr)
    }
  }, [gameCount])


  
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
      }
    }
  })


  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <section className="game-container">
        <p>0-100. Slide to the target and avoid penalty points. Aim low.</p>
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

        <section className="slider-container">
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
        {gameCount === 5 ? (
          !open ? (
            <section>
              <button onClick={handleOpen}>Stats</button>
            </section>
          ) : null
        ) : null}
        <section></section>
      </section>
      <Modal
        className="score-modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="sliders game pop up with final score"
        aria-describedby="final scores in the slider game"
      >
        <Box className="score-modal-box">
          <Icon
            onClick={handleClose}
            className="close-modal"
            component={CloseIcon}
          ></Icon>
          {totalScore === 0 ? (
            <p style={{ fontSize: 18 }}>
              Wow! You are too good. Not many people score 0.
            </p>
          ) : null}
          {totalScore > 0 ? (
            totalScore <= 10 ? (
              <p style={{ fontSize: 18 }}>
                Very good. You are good. Getting under 10 is an impressive
                attempt.
              </p>
            ) : null
          ) : null}
          {totalScore > 10 ? (
            totalScore <= 20 ? (
              <p style={{ fontSize: 18 }}>
                Pretty pretty pretty good. Can you get under 10 tomorrow? We
                believe.
              </p>
            ) : null
          ) : null}
          {totalScore > 20 ? (
            totalScore <= 40 ? (
              <p style={{ fontSize: 18 }}>
                It is not the end of the world. You can hold your head up hight
                and say, I did my best.
              </p>
            ) : null
          ) : null}
          {totalScore > 40 ? (
            <p style={{ fontSize: 18 }}>
              Be honest. How do you think you you did? Over 40, well it could be
              better. Still you had fun right? Right?.
            </p>
          ) : null}
          <p style={{ fontSize: 20, fontWeight: 600 }}>
            Your total score is {totalScore}
          </p>
        </Box>
      </Modal>
    </>
  );
}
