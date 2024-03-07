
import { Slider } from "@mui/material"
import { useState } from "react"

export default function Help() {
  const [exampleValue, setExampleValue] = useState(null)
  const exampleNum = 27

  const handleValueChange = (event, newValue) => {
    setExampleValue(newValue)
  }

  return(
  <section>
    <h1 style={{marginTop:25}}>How to play Sliders</h1>
    <p>Sliders is very simple. Each slider starts from zero and ends at 100. You are given a target. Slide to where you think that number is. For every digit you are out, you get a penalty point. The lowest score wins. Aim low. Aim zero.</p>
    <p><strong>You only get one change per slider so do not let go until you are happy with your score.</strong></p>
    <p>Here, try it yourself. Go for {exampleNum}</p> 
    <Slider
      className="slider"
      valueLabelDisplay="off"
      color="success"
      min={0}
      max={100}
      onChangeCommitted={handleValueChange}
    />
    {!exampleValue ? null : (+exampleValue-exampleNum < 21) ?
    (<>
      <p>You got {exampleValue} and your target was {exampleNum}. This equates to a penalty of {Math.abs(exampleValue-exampleNum)}. Penalty points are not your friend.</p>
      <p>Having said that, {Math.abs(exampleValue-exampleNum)} is a great score so maybe you are a natural</p>
    </>)
      :
      <p>You got {exampleValue} and your target was {exampleNum}. This equates to a penalty of {Math.abs(exampleValue-exampleNum)}. Penalty points are not your friend.</p> 
    }
  </section>
  )
}