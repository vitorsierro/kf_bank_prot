import { Col, Row } from "antd";
import styled from '../../../../../styles/Transferencia.module.css'
import BoletosTable from "./BoletosTable";

export default function FinBoletos() {
  return(
    <>
    <Row className={styled.RowFinanceiro} gutter={[40,40]}>
        <Col className={styled.ColFinanceiro} span={4} >
          <header><h3>GERADOS</h3></header>
          <main><h5>R$ 30,00</h5><hr /></main>
          <footer><h5>QUANTIDADE: 0</h5></footer>
        </Col>
        <Col className={styled.ColFinanceiro} span={4} >
          <header><h3>PENDENTES</h3></header>
          <main><h5>R$ 30,00</h5><hr /></main>
          <footer><h5>QUANTIDADE: 0</h5></footer>
        </Col>
        <Col className={styled.ColFinanceiro} span={4} >
          <header><h3>LIQUIDADOS</h3></header>
          <main><h5>R$ 30,00</h5><hr /></main>
          <footer><h5>QUANTIDADE: 0</h5></footer>
        </Col>
        <Col className={styled.ColFinanceiro} span={4} >
          <header><h3>VENCIDOS</h3></header>
          <main><h5>R$ 30,00</h5><hr /></main>
          <footer><h5>QUANTIDADE: 0</h5></footer>
        </Col>
        <Col className={styled.ColFinanceiro} span={4} >
          <header><h3>CANCELADOS</h3></header>
          <main><h5>R$ 30,00</h5><hr /></main>
          <footer><h5>QUANTIDADE: 0</h5></footer>
        </Col>
        <Col className={styled.ColFinanceiro} span={4} >
          <header><h3>RECEBIDO POR FORA</h3></header>
          <main><h5>R$ 30,00</h5><hr /></main>
          <footer><h5>QUANTIDADE: 0</h5></footer>
        </Col>
    </Row>
    <BoletosTable />
  </>
  );
};
