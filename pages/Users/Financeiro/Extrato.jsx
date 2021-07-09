//CSS
import styled from '../../../styles/Transferencia.module.css';
import { Row, Col } from 'antd';
//Components
import HeaderUser from '../../../Components/user/HeaderUser'
import ExtratoTable from '../../../Components/user/Financeiro/Extrato/ExtratoTable';


export default function Extrato() {
  return(
    <>
      <HeaderUser />
      <div className={styled.Row}>
        <Row style={{marginBottom:'2rem'}}>
          <Col span={6} className={styled.Col}>
            <h4>ENTRADA EM JULHO DE 2021</h4>
            <h4>R$ 0,00</h4>
          </Col>
          <Col span={6} className={styled.Col} >
            <h4>CRÉDITO</h4>
            <h4>R$ 50,00</h4>
          </Col>
          <Col span={6} className={styled.Col}>
            <h4>DÉBITO</h4>
            <h4>R$ 31,00</h4>
          </Col>
          <Col span={6} className={styled.Col}>
            <h4>SALDO PROVISÓRIO</h4>
            <h4>R$ 19,00</h4>
          </Col>
        </Row>
        <Row>
          <Col className={styled.Col}>
            <h4>SALDO ATUAL</h4>
            <h4>R$ 19,00</h4>
          </Col>
        </Row>
      </div>
      <Row className={styled.Row} style={{justifyContent:'initial'}}>
        <h3>Fluxo Financeiro</h3>
        <ExtratoTable />
      </Row>
    </>
  );
};
