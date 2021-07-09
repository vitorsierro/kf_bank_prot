import styled from '../../../../styles/Transferencia.module.css';
import { Row, Col } from 'antd';

//Components
import HeaderUser from '../../../../Components/user/HeaderUser';
import Link from 'next/link';
import TransacoesTable from '../../../../Components/user/Financeiro/VendasCartao/Transacoes/TransacoesTable';

export default function Transacoes() {
  return(
    <>
    <HeaderUser />
    <Row style={{marginLeft:'11rem'}}>
    <h4>Para vendas a cartão, você precisa abrir seu estabelecimento,<Link href='/Users/Financeiro/VendasCartao/Estabelecimento'>Clique Aqui</Link> e abra agora mesmo!</h4>
    </Row>
    <Row className={styled.RowFinanceiro} gutter={[40,40]}>
        <Col className={`${styled.ColFinanceiro} ${styled.ColTransacoes}`} span={4} >
          <header><h3>COMPLETA</h3></header>
          <main><h5>R$ 0,00</h5><hr /></main>
          <footer><h5>Crédito liberado.</h5></footer>
        </Col>
        <Col className={`${styled.ColFinanceiro} ${styled.ColTransacoes}`} span={4} >
          <header><h3>APROVADA</h3></header>
          <main><h5>R$ 0,00</h5><hr /></main>
          <footer><h5>Crédito a ser liberado</h5>
          <h5>Tarifa ainda a ser recolhida : 4,40 %</h5></footer>
        </Col>
        <Col className={`${styled.ColFinanceiro} ${styled.ColTransacoes}`} span={4} >
          <header><h3>APROVADA PARCIALMENTE</h3></header>
          <main><h5>R$ 30,00</h5><hr /></main>
          <footer><h5>Crédito a ser liberado</h5>
          <h5>Tarifa ainda a ser recolhida : 4,40 %</h5></footer>
        </Col>
        <Col className={`${styled.ColFinanceiro} ${styled.ColTransacoes}`} span={4} >
          <header><h3>PENDENTE</h3></header>
          <main><h5>R$ 00,00</h5><hr /></main>
          <footer><h5>Aguardando pagamento.</h5></footer>
        </Col>
        <Col className={`${styled.ColFinanceiro} ${styled.ColTransacoes}`} span={4} >
          <header><h3>CANCELADOS</h3></header>
          <main><h5>R$ 0,00</h5><hr /></main>
          <footer><h5>Transação não autorizada.</h5></footer>
        </Col>
        <Col className={`${styled.ColFinanceiro} ${styled.ColTransacoes}`} span={4} >
          <header><h3>DEVOLVIDA</h3></header>
          <main><h5>R$ 0,00</h5><hr /></main>
          <footer><h5>Transação estornada.</h5></footer>
        </Col>
    </Row>
    <Row>
      <TransacoesTable />
    </Row>
    </>
  );
};
