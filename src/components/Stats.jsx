import { useState } from "react";
import ScoreHistory from "./ScoreHistory";
import { IoShareSocial } from "react-icons/io5";
import SocialShare from "./SocialShare";
import { Slider } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react"


export default function Stats() {
  const storedGameStatsString = localStorage.getItem('gameStats');
  const storedGameStatsArr = JSON.parse(storedGameStatsString);
  const [share, setShare] = useState()

  const handleShare = () => {setShare(!share)}

  return(
    !storedGameStatsArr ? 
      <section className="stats-total-container">
        <h1>You&apos;ve not played</h1>
        <p>Play the daily game to generate some stats to brag about. Read <Link to='/help'>how to play</Link> and <Link to='/practice'>have a practice</Link> so you&apos;re ready to smash the daily challenge</p>
        <Link to='/'>
          <button>Daily Game</button>
        </Link>
      </section>
    :
    <>
    <section className="stats-total-container">
    <h1 className="page-header">Stat Attack</h1>
      {storedGameStatsArr[1] === 0 ? (
        <p style={{ fontSize: 18 }}>
          Wow! You are too good. Not many people score 0.
        </p>
      ) : null}
      {storedGameStatsArr[1] > 0 ? (
        storedGameStatsArr[1] <= 10 ? (
          <p style={{ fontSize: 18 }}>
            Very good. You are good. Getting under 10 is an impressive
            attempt.
          </p>
        ) : null
      ) : null}
      {storedGameStatsArr[1] > 10 ? (
        storedGameStatsArr[1] <= 20 ? (
          <p style={{ fontSize: 18 }}>
            Pretty pretty pretty good. Can you get under 10 tomorrow? We
            believe.
          </p>
        ) : null
      ) : null}
      {storedGameStatsArr[1] > 20 ? (
        storedGameStatsArr[1] <= 40 ? (
          <p style={{ fontSize: 18 }}>
            It is not the end of the world. You can hold your head up hight
            and say, I did my best.
          </p>
        ) : null
      ) : null}
      {storedGameStatsArr[1] > 40 ? (
        <p style={{ fontSize: 18 }}>
          Be honest. How do you think you you did? Over 40, well it could be
          better. Still you had fun right? Right?.
        </p>
      ) : null}
      <p style={{ fontSize: 20, fontWeight: 600 }}>
        Your total score is {storedGameStatsArr[1]}
      </p>
      <section>
        <button style={{boxSizing:"border-box"}} onClick={handleShare}>Share <IoShareSocial style={{marginBottom:-2}} /></button>
        <SocialShare share={share} setShare={setShare} />
    </section>
      <p>Here&apos;s how you did...</p>
      <section className="slider-container">
            <p className="slider-instruction">
              Target: {storedGameStatsArr[2]}. Attempt: {storedGameStatsArr[3]}. Penalty:{storedGameStatsArr[4]}
            </p>
          <h4>1.</h4>
              <Slider
                className="slider"
                aria-label="slider 1"
                valueLabelDisplay="off"
                defaultValue={storedGameStatsArr[3]}
                disabled
                min={0}
                max={100}
              />
        </section>
        <section className="slider-container">
            <p className="slider-instruction">
              Target: {storedGameStatsArr[5]}. Attempt: {storedGameStatsArr[6]}. Penalty:{storedGameStatsArr[7]}
            </p>
          <h4>2.</h4>
              <Slider
                className="slider"
                aria-label="slider 2"
                valueLabelDisplay="off"
                defaultValue={storedGameStatsArr[6]}
                disabled
                min={0}
                max={100}
              />
        </section>
        <section className="slider-container">
            <p className="slider-instruction">
              Target: {storedGameStatsArr[8]}. Attempt: {storedGameStatsArr[9]}. Penalty:{storedGameStatsArr[10]}
            </p>
          <h4>3.</h4>
              <Slider
                className="slider"
                aria-label="slider 3"
                valueLabelDisplay="off"
                defaultValue={storedGameStatsArr[9]}
                disabled
                min={0}
                max={100}
              />
        </section>
        <section className="slider-container">
            <p className="slider-instruction">
              Target: {storedGameStatsArr[11]}. Attempt: {storedGameStatsArr[12]}. Penalty:{storedGameStatsArr[13]}
            </p>
          <h4>4.</h4>
              <Slider
                className="slider"
                aria-label="slider 4"
                valueLabelDisplay="off"
                defaultValue={storedGameStatsArr[12]}
                disabled
                min={0}
                max={100}
              />
        </section>
        <section className="slider-container">
            <p className="slider-instruction">
              Target: {storedGameStatsArr[14]}. Attempt: {storedGameStatsArr[15]}. Penalty:{storedGameStatsArr[16]}
            </p>
          <h4>5.</h4>
              <Slider
                className="slider"
                aria-label="slider 5"
                valueLabelDisplay="off"
                defaultValue={storedGameStatsArr[15]}
                disabled
                min={0}
                max={100}
              />
        </section>
    </section>
    <section>
      <h2>Score distribution</h2>
      <ScoreHistory />
    </section>
    </>   
  )
}