//Components
import HeaderUser from "../../Components/user/HeaderUser/HeaderUser";
import Link from 'next/link';
import Boleto from "../../Components/user/Boleto/Boleto";
import Tarifas from "../../Components/user/Tarifas/Tarifas";

//CSS
import { Row, Col, Divider } from 'antd';
import styled from '../../styles/Users.module.css';

export default function Users() {
  return (
    <>
      <HeaderUser />
      <Divider orientation="left" className={styled.Divider}>
        Saldo
      </Divider>
      <Row className={styled.Row}>
        <Col className={styled.Col}>
          <h3>Saldo Reais (BRL)</h3>
          <h5>R$ 30,00</h5>
        </Col>
        <Col className={styled.Col}>
          <h3>Saldo Crédito</h3>
          <h5>R$ 00,00</h5>
        </Col>
        <Col className={styled.Col}>
          <h3>Saldo Cartão Pré-Pago (BRL)</h3>
          <h5>R$ 30,00</h5>
          <hr />
          <Link href="#cartoes"><p>Solicitar ou Adicionar - Cartão</p></Link>
        </Col>
      </Row>
      <Divider orientation="left" className={styled.Divider}>
        Boleto
      </Divider>
      <Boleto />
      <Divider orientation="left" className={styled.Divider}>
        Tarifas e Limites
      </Divider>
      <Tarifas />
    </>
  );
};
