//Components
import BoletoChart from './BoletoChart';
import BoletoTable from './BoletoTable';

//CSS & STYLE
import {Row, Col} from 'antd';
import styled from '../../../styles/Users.module.css'


export default function Boleto() {
  return(
    <>
      
      <Row className={styled.Row}>
        <Col className={styled.Col}>
          <Col className={styled.ColInterno}>
            <h3>BOLETOS GERADOS</h3>
            <h5>R$ 00,00</h5>
          </Col>
          <hr />
          <h5>Quantidade: 0</h5>
        </Col>
        <Col className={styled.Col}>
          <Col className={styled.ColInterno}>
            <h3>BOLETOS PENDENTES</h3>
            <h5>R$ 00,00</h5>
          </Col>
          <hr />
          <h5>Quantidade: 0</h5>
        </Col>
        <Col className={styled.Col}>
          <Col className={styled.ColInterno}>
            <h3>BOLETOS LIQUIDADOS</h3>
            <h5>R$ 00,00</h5>
          </Col>
          <hr />
          <h5>Quantidade: 0</h5>
        </Col>
      </Row>
      <Row className={styled.Row}>
        <Col className={styled.Col}>
          <Col className={styled.ColInterno}>
            <h3>BOLETOS VENCIDOS</h3>
            <h5>R$ 00,00</h5>
          </Col>
          <hr />
          <h5>Quantidade: 0</h5>
        </Col>
        <Col className={styled.Col}>
          <Col className={styled.ColInterno}>
            <h3>BOLETOS CANCELADOS</h3>
            <h5>R$ 00,00</h5>
          </Col>
          <hr />
          <h5>Quantidade: 0</h5>
        </Col>
        <Col className={styled.Col}>
          <Col className={styled.ColInterno}>
            <h3>BOLETOS RECEBIDO POR FORA</h3>
            <h5>R$ 00,00</h5>
          </Col>
          <hr />
          <h5>Quantidade: 0</h5>
        </Col>
      </Row>
      <Row className={styled.Row}>
        <Col className={styled.Col}>
          <h3>BOLETOS PENDENTES</h3>
          <h5>0</h5>
        </Col>
        <Col>
          <BoletoTable />
        </Col>
      </Row>
      <Row>
        <BoletoChart />
      </Row>
    </>
  )
};
