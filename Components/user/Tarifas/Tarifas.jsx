import { Row, Col } from 'antd'
import styled from '../../../styles/Transferencia.module.css';
import TarifasTable from './TarifasTable';

export default function Tarifas() {
  return (
    <>
      <Row className={styled.Row}>
        <Col className={styled.Col}>
          <h4>MOVIMENTAÇÃO EM JUNHO DE 2021</h4>
          <h3>R$ 50,00</h3>
        </Col>
        <Col className={styled.TarifasCol} style={{width:'50%'}}>
            <div className={styled.Atencao}>
              <h4>ATENÇÃO</h4>
              <h3>Até R$ 0,00 reais mensais em movimentação não há tarifa de intermediação, apenas o custo mínimo por transação, após este valor será cobrado a tarifa de intermediação por transação. Confira as tarifas abaixo!
              </h3>
            </div>
          </Col>
      </Row>
      <Row className={styled.Row} 
      style={{padding:'2rem 0rem'}}>
       <TarifasTable />
      </Row>
    </>
  );
};
