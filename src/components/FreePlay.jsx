import { useState, useEffect } from "react"
import { Slider } from "@mui/material"

export default function FreePlay() {
  const [sliderOneValue, setSliderOneValue] = useState(0)
  const [sliderTwoValue, setSliderTwoValue] = useState(0)
  const [sliderThreeValue, setSliderThreeValue] = useState(0)
  const [sliderFourValue, setSliderFourValue] = useState(0)
  const [sliderFiveValue, setSliderFiveValue] = useState(0)

  const [sliderOneTarget, setSliderOneTarget] = useState(0)
  const [sliderTwoTarget, setSliderTwoTarget] = useState(0)
  const [sliderThreeTarget, setSliderThreeTarget] = useState(0)
  const [sliderFourTarget, setSliderFourTarget] = useState(0)
  const [sliderFiveTarget, setSliderFiveTarget] = useState(0)

  const [score, setScore] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [gameCount, setGameCount] = useState(0)
  const [restart, setRestart] = useState(false)
  
  const handleSliderOneChange = (event, newValue) => {
    const sliderValue = Math.round(newValue)
    setSliderOneValue(sliderValue)
    if(sliderValue > 0) {
      setScore(Math.abs(sliderValue - sliderOneTarget))
      setGameCount((currentCount) => currentCount + 1)
    }
  }
  const handleSliderTwoChange = (event, newValue) => {
    const sliderValue = Math.round(newValue)
    setSliderTwoValue(sliderValue)
    if(sliderValue > 0) {
      setScore(Math.abs(sliderValue - sliderTwoTarget))
      setGameCount((currentCount) => currentCount + 1)
    }
  }
  const handleSliderThreeChange = (event, newValue) => {
    const sliderValue = Math.round(newValue)
    setSliderThreeValue(sliderValue)
    if(sliderValue > 0) {
      setScore(Math.abs(sliderValue - sliderThreeTarget))
      setGameCount((currentCount) => currentCount + 1)
    }
  }

  const handleSliderFourChange = (event, newValue) => {
    const sliderValue = Math.round(newValue)
    setSliderFourValue(sliderValue)
    if(sliderValue > 0) {
      setScore(Math.abs(sliderValue - sliderFourTarget))
      setGameCount((currentCount) => currentCount + 1)
    }
  }
  const handleSliderFiveChange = (event, newValue) => {
    const sliderValue = Math.round(newValue)
    setSliderFiveValue(sliderValue)
    if(sliderValue > 0) {
      setScore(Math.abs(sliderValue - sliderFiveTarget))
      setGameCount((currentCount) => currentCount + 1)
    }
  }


  const handleRestart = () => {
    setRestart(!restart)
    setSliderOneValue(0)
    setSliderTwoValue(0)
    setSliderThreeValue(0)
    setSliderFourValue(0)
    setSliderFiveValue(0)
    setTotalScore(0)
  }
  
  useEffect(() => {
    setSliderOneTarget(Math.floor((Math.random() * 99) + 1))
    setSliderTwoTarget(Math.floor((Math.random() * 99) + 1))
    setSliderThreeTarget(Math.floor((Math.random() * 99) + 1))
    setSliderFourTarget(Math.floor((Math.random() * 99) + 1))
    setSliderFiveTarget(Math.floor((Math.random() * 99) + 1))
  },[restart])

  useEffect(() => {
    setTotalScore((currentTotal) => currentTotal + score)
  },[gameCount])
  
  return (
    <>
    <section className='game-container'>
    <h1 className="page-header">Practice</h1>
      <section className='slider-container'>
        {sliderOneValue === 0 ? 
        <p className='slider-instruction'>Slide to {sliderOneTarget}</p>
        :
        <p className='slider-instruction'>Target: {sliderOneTarget}. Attempt: {sliderOneValue}. Penalty: {Math.abs(sliderOneTarget-sliderOneValue)}</p>
        }
        <h4>1.</h4>
        {sliderOneValue === 0 ? 
        <Slider
          className='slider'
          aria-label="Slider 1"
          step={0.1}
          valueLabelDisplay="off"
          color="success"
          min={0}
          max={100}
          onChangeCommitted={handleSliderOneChange}
        />
            : 
        <>
        <Slider
          className='slider'
          valueLabelDisplay="off"
          defaultValue={sliderOneValue}
          disabled
          min={0}
          max={100}
        />
      </>
      }
      </section>

      <section className='slider-container'> 
      {sliderTwoValue === 0 ? 
        <p className='slider-instruction'>Slide to {sliderTwoTarget}</p>
        :
        <p className='slider-instruction'>Target: {sliderTwoTarget}. Attempt: {sliderTwoValue}. Penalty: {Math.abs(sliderTwoTarget-sliderTwoValue)}</p>
        }
        <h4>2.</h4>
        {sliderTwoValue === 0 ? 
        <Slider
          className='slider'
          aria-label="Slider 2"
          step={0.1}
          valueLabelDisplay="off"
          color="primary"
          min={0}
          max={100}
          onChangeCommitted={handleSliderTwoChange}
        />
            : 
        <>
        <Slider
          className='slider'
          valueLabelDisplay="off"
          defaultValue={sliderTwoValue}
          disabled
          min={0}
          max={100}
        />
      </>
      }
      </section>

      <section className='slider-container'> 
      {sliderThreeValue === 0 ? 
        <p className='slider-instruction'>Slide to {sliderThreeTarget}</p>
        :
        <p className='slider-instruction'>Target: {sliderThreeTarget}. Attempt: {sliderThreeValue}. Penalty: {Math.abs(sliderThreeTarget-sliderThreeValue)}</p>
        }
        <h4>3.</h4>
        {sliderThreeValue === 0 ? 
        <Slider
          className='slider'
          aria-label="Slider 3"
          step={0.1}
          valueLabelDisplay="off"
          color="secondary"
          min={0}
          max={100}
          onChangeCommitted={handleSliderThreeChange}
        />
            : 
        <>
        <Slider
          className='slider'
          valueLabelDisplay="off"
          defaultValue={sliderThreeValue}
          disabled
          min={0}
          max={100}
        />
      </>
      }
      </section>

      <section className='slider-container'> 
      {sliderFourValue === 0 ? 
        <p className='slider-instruction'>Slide to {sliderFourTarget}</p>
        :
        <p className='slider-instruction'>Target: {sliderFourTarget}. Attempt: {sliderFourValue}. Penalty: {Math.abs(sliderFourTarget-sliderFourValue)}</p>
        }
        <h4>4.</h4>
        {sliderFourValue === 0 ? 
        <Slider
          className='slider'
          aria-label="Slider 4"
          step={0.1}
          valueLabelDisplay="off"
          color="error"
          min={0}
          max={100}
          onChangeCommitted={handleSliderFourChange}
        />
            : 
        <>
        <Slider
          className='slider'
          valueLabelDisplay="off"
          defaultValue={sliderFourValue}
          disabled
          min={0}
          max={100}
        />
      </>
      }
      </section>

      <section className='slider-container'> 
      {sliderFiveValue === 0 ? 
        <p className='slider-instruction'>Slide to {sliderFiveTarget}</p>
        :
        <p className='slider-instruction'>Target: {sliderFiveTarget}. Attempt: {sliderFiveValue}. Penalty: {Math.abs(sliderFiveTarget-sliderFiveValue)}</p>
        }
        <h4>5.</h4>
        {sliderFiveValue === 0 ? 
        <Slider
          className='slider'
          aria-label="Slider 5"
          step={0.1}
          valueLabelDisplay="off"
          color="warning"
          min={0}
          max={100}
          onChangeCommitted={handleSliderFiveChange}
        />
            : 
        <>
        <Slider
          className='slider'
          valueLabelDisplay="off"
          defaultValue={sliderFiveValue}
          disabled
          min={0}
          max={100}
        />
      </>
      }
        </section>

      <section className="total-score-free-play">
        <p>Your total score is {totalScore}</p>
        <button onClick={handleRestart}>Restart</button>
      </section>

    </section>
    </>
  )
}