import Chart from "react-google-charts"

export default function BoletoChart() {
  const data = [
    ['Meses', 'Boletos Emitidos', 'Boletos Compensados'],
    ['Janeiro', 10, 5],
    ['Fevereiro', 11, 4],
    ['Março', 6, 1],
    ['Abril', 1, 5],
    ['Maio', 10, 5],
    ['Junho', 11, 4],
    ['Julho', 6, 1],
    ['Agosto', 1, 5],
    ['Setembro', 10, 5],
    ['Outubro', 11, 4],
    ['Novembro', 6, 1],
    ['Dezembro', 1, 5],
  ]
  return(
    <Chart
      style={{margin: '1rem 3rem 3rem'}}
      width={'90%'}
      height={'300px'}
      chartType="Bar"
      loader={<div>Loading Chart</div>}
  data={data}
  options={{
    chart: {
      title: 'Boletos emitidos X Boletos compensados em 2021',
      
    },
    colors: ['#71e49d', '#b0120a'],
  }}rootProps={{ 'data-testid': '2' }}
/>
  )
};
