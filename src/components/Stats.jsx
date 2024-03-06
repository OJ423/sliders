import ScoreHistory from "./ScoreHistory";

export default function Stats() {
  const storedGameStatsString = localStorage.getItem('gameStats');
  const storedGameStatsArr = JSON.parse(storedGameStatsString);

  return(
    <>
    <section className="stats-total-container">
      <h1>Your last game...</h1>
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
    </section>
    <section>
      <h2>Score distribution</h2>
      <ScoreHistory />
    </section>
    </>
  )
}