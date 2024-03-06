import { BarChart } from "@mui/x-charts";

export default function ScoreHistory() {
  const storedGameHistoryString = localStorage.getItem('scoreHistory');
  const storedGameHistoryArr = JSON.parse(storedGameHistoryString);

  const chartSetting = {
    xAxis: [
      {
        label: 'How you doing?',
      },
    ],
    width: 300,
    height: 300,
  };
  const dataset = [
    {
      range: '0',
      score: storedGameHistoryArr[0]
    },
    {
      range: '1-10',
      score: storedGameHistoryArr[1]
    },
    {
      range: '11-20',
      score: storedGameHistoryArr[2]
    },
    {
      range: '21-30',
      score: storedGameHistoryArr[3]
    },
    {
      range: '31-40',
      score: storedGameHistoryArr[4]
    },
    {
      range: '41-50',
      score: storedGameHistoryArr[5]
    },
    {
      range: `50+`,
      score: storedGameHistoryArr[6]
    }
  ]

  return (
    <BarChart
      margin={{left:40,right:0,top:0,bottom:0}}
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'range', axisLine: false, tickLine: false}]}
      xAxis={[{axisLine: false, tickLine: false}]}
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
  )
}