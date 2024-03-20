import { BarChart } from "@mui/x-charts";

export default function ScoreHistory() {
  const storedGameHistoryString = localStorage.getItem('scoreHistory');
  const storedGameHistoryArr = JSON.parse(storedGameHistoryString);
  let totalGames = 0
  storedGameHistoryArr.forEach((game) => {
    totalGames += +game
  })

  const chartSetting = {
    xAxis: [
      {
        label: 'How you doing?',
      },
    ],
    height: 200,
  };
  const dataset = [
    {
      range: '0',
      score: +storedGameHistoryArr[0]
    },
    {
      range: '1-5',
      score: +storedGameHistoryArr[1]
    },
    {
      range: '6-10',
      score: +storedGameHistoryArr[2]
    },
    {
      range: '11-15',
      score: +storedGameHistoryArr[3]
    },
    {
      range: '16-20',
      score: +storedGameHistoryArr[4]
    },
    {
      range: '20+',
      score: +storedGameHistoryArr[5]
    }
  ]

  return (
    <section>
      <BarChart
        margin={{left:40,right:0,top:0,bottom:0}}
        dataset={dataset}
        yAxis={[{ scaleType: 'band', dataKey: 'range'}]}
        series={[{ dataKey: 'score'}]}
        layout="horizontal"
        sx={{
          //change left yAxis label styles
        "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
          strokeWidth:0.5,
          fill:"#42f5a7"
        },
          // change bottom label styles
          "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
              strokeWidth:0.5,
              fill:"#42f5a7"
          },
            // bottomAxis Line Styles
          "& .MuiChartsAxis-bottom .MuiChartsAxis-line":{
            stroke:"#42f5a7",
            strokeWidth:0.5
          },
          // leftAxis Line Styles
          "& .MuiChartsAxis-left .MuiChartsAxis-line":{
            stroke:"#42f5a7",
            strokeWidth:0.5
          },
          "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tick": {
            stroke:"#42f5a7",
            strokeWidth:0.5          
          }
        }}
        {...chartSetting}
      />
      <h3>YOUR SCORE BREAKDOWN...</h3>
      <article className="stats-summary ">
        <div className="stats-box">
          {storedGameHistoryArr[0] === 0 ? <p className="stats-percentage">0%</p>:
          <p className="stats-percentage">{Math.round((storedGameHistoryArr[0]/totalGames)*100)}%</p>}
          <p className="stat-number">{storedGameHistoryArr[0]}</p>
          <p>0</p>
        </div>
        <div className="stats-box">
          {storedGameHistoryArr[1] === 0 ? <p className="stats-percentage">0%</p>:
          <p className="stats-percentage">{Math.round((storedGameHistoryArr[1]/totalGames)*100)}%</p>}
          <p className="stat-number">{storedGameHistoryArr[1]}</p>
          <p>1-5</p>
        </div>
        <div className="stats-box">
          <p className="stats-percentage">{Math.round((storedGameHistoryArr[2]/totalGames)*100)}%</p>
          <p className="stat-number">{storedGameHistoryArr[2]}</p>
          <p>6-10</p>
        </div>
        <div className="stats-box">
          <p className="stats-percentage">{Math.round((storedGameHistoryArr[3]/totalGames)*100)}%</p>
          <p className="stat-number">{storedGameHistoryArr[3]}</p>
          <p>11-15</p>
        </div>
        <div className="stats-box">
          <p className="stats-percentage">{Math.round((storedGameHistoryArr[4]/totalGames)*100)}%</p>
          <p className="stat-number">{storedGameHistoryArr[4]}</p>
          <p>16-20</p>
        </div>
        <div className="stats-box">
          <p className="stats-percentage">{Math.round((storedGameHistoryArr[5]/totalGames)*100)}%</p>
          <p className="stat-number">{storedGameHistoryArr[5]}</p>
          <p>20+</p>
        </div>
      </article>
    </section>
  )
}