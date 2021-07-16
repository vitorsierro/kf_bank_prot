//Components
import { Row, Col } from 'antd'
import Chart from "react-google-charts"
import HeaderUsers from '../../Components/user/HeaderUser'
//CSS
import styled from '../../styles/Transferencia.module.css'

export default function Investimentos() {
  const data = [
    ['x', 'CDI', 'Nosso Investimento'],
    ['2020', 0, 20.16],
    ['', 3, 40.16],
    ['', 6, 66.75],
    ['2021', 9, 90.00],
    ['', 12, 100.00],
    ['', 15, 110.15]
  ]
  return(
  <>
    <HeaderUsers />
    <Row className={styled.RowFinanceiro}>
      <Col className={`${styled.ColFinanceiro} ${styled.ColInvestimento}`}>
      <header>
        <h3>Meus Investimentos</h3>
      </header>
      <main>
        <h2>R$ 5.000,00</h2>
      </main>
      <footer>
      <h5>Rendimento de 01 a 31/06/21</h5>
      <h5>+ R$ 20,00               + 1,00%</h5>
      </footer>
      </Col>
    </Row>
    <Row className={styled.Row}>
    <Col className={styled.Col}>
     <h2>Grafico de investimento</h2>
    </Col>    
    <Chart
      width={'800px'}
      height={'400px'}
      chartType="LineChart"
      loader={<div>Carregando grafico</div>}
      data={data}
      options={{
       
        hAxis: {
          title: 'Tempo em semenstre',
        },
        vAxis: {
          title: 'Porcentagem Acumulada',
        },
        animation:{duration:30},
        backgroundColor:'#71e49d',
        series: {
          1: { curveType: 'function' },
        },
      }}
      rootProps={{ 'data-testid': '2' }}
    />
    </Row>
  </>
  );
};
