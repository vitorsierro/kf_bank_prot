//CSS
import row from '../../../styles/Transferencia.module.css';
import styled from '../../../styles/Financeiro.module.css';
import { Row, Col } from 'antd';
//Components
import HeaderUser from '../../../Components/user/HeaderUser'
import ExtratoTable from '../../../Components/user/Financeiro/Extrato/ExtratoTable';


export default function Extrato() {
  return (
    <>
      <HeaderUser />
      <Row className={styled.RowFinanceiro}>
        <Col className={styled.ColFinanceiro}>
          <header>
            <h4>ENTRADA EM JULHO DE 2021</h4>
          </header>
          <main>
            <h4>R$ 0,00</h4>
          </main>
        </Col>
        <Col className={styled.ColFinanceiro} >
          <header>
            <h4>CRÉDITO</h4>
          </header>
          <main>
            <h4>R$ 50,00</h4>
          </main>
        </Col>
        <Col className={styled.ColFinanceiro}>
          <header>
            <h4>DÉBITO</h4>
          </header>
          <main>
            <h4>R$ 31,00</h4>
          </main>
        </Col>
        <Col className={styled.ColFinanceiro}>
          <header>
            <h4>SALDO PROVISÓRIO</h4>
          </header>
          <main>
            <h4>R$ 19,00</h4>
          </main>
        </Col>
        <Col className={styled.ColFinanceiro}>
          <header>
            <h4>SALDO ATUAL</h4>
          </header>
          <main>
            <h4>R$ 19,00</h4>
          </main>
        </Col>
      </Row>
      <Row className={row.Row} style={{ justifyContent: 'initial' }}>
        <h3>Fluxo Financeiro</h3>
        <ExtratoTable />
      </Row>
    </>
  );
};
