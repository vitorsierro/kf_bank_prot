//Components
import Link from 'next/link';
import Header from "../Components/Header/Header";
import Footer from '../Components/Footer/Footer';
//CSS
import styled from '../styles/Home.module.css';
import { Row, Col } from "antd";

const linkGooglePlay = "https://play.google.com/store/apps/details?id=kf.bank"

export default function Home() {
  return (
    <>
      <Header />
      <div className={styled.Conta}>
        <div>
          <h2>Conta digital é com KF Bank</h2>
          <h4>Conheça a nossa conta digital.</h4>
          <h5>Pague, transfira e gerencie a sua contabilidade em um só aplicativo</h5>
          <button>Abra sua conta</button>
        </div>
      </div>
      <div id="cpf" className={styled.ContaPessoa}>
        <h2>Conta Pessoa Física</h2>
        <Row gutter={[48, 48]}>
          <Col className={styled.Col}>
            <Row><h2>CONTA GLOBAL</h2></Row>
            <Row><p>Conta em dólar e euro com cartão de credito pré-pago</p></Row>
          </Col>
          <Col className={styled.Col}>
            <Row><h2>CONTA CORRENTE</h2></Row>
            <Row><p>Conta corrente e de pagamento para negativados</p></Row>
          </Col>
          <Col className={styled.Col}>
            <Row><h2>PIX</h2></Row>
            <Row><p>Pagamentos instantâneos, Transferências, cobranças e QR Code.</p></Row>
          </Col>
        </Row>
        <Row gutter={[48, 48]}>
          <Col className={styled.Col}>
            <Row><h2>MAQUININHA DE VENDAS</h2></Row>
            <Row><p>Maquininhas de vendas com opção dos recebíveis.</p></Row>
          </Col>
          <Col className={styled.Col}>
            <Row><h2>CARTÃO DE CRÉDITO</h2></Row>
            <Row><p>Cartão de crédito internacional Mastercard, Pré pago recarregável.</p></Row>
          </Col>
          <Col className={styled.Col}>
            <Row><h2>E-COMMERCE</h2></Row>
            <Row><p>Recebimentos para suas vendas online de cartão de crédito.</p></Row>
          </Col>
        </Row>
        <Row gutter={[48, 48]}>
          <Col className={styled.Col}>
            <Row><h2>PAGAMENTOS</h2></Row>
            <Row><p>Pagamentos de títulos, taxas e boletos.</p></Row>
          </Col>
          <Col className={styled.Col}>
            <Row><h2>DEPÓSITOS</h2></Row>
            <Row><p>Depósitos por TED, por boleto e por PIX.</p></Row>
          </Col>
          <Col className={styled.Col}>
            <Row><h2>BOLETO</h2></Row>
            <Row><p>Boleto para cobranças de suas vendas ou serviços, emissão de boletos em massa em todos as modalidades inclusive carnê.</p></Row>
          </Col>
        </Row>
      </div>
      <div id="cnpj" className={styled.ContaPessoa}>
        <h2>Conta Pessoa Jurídica</h2>
        <h4>Conta Jurídica com contabilidade completa, remota, gratuita para optantes do simples e MEI.</h4>
        <button>Contabilidade</button>
        <Row gutter={[48, 48]}>
          <Col className={styled.Col}>
            <Row><h2>CONTA GLOBAL</h2></Row>
            <Row><p>Conta em dólar e euro com cartão de credito pré-pago</p></Row>
          </Col>
          <Col className={styled.Col}>
            <Row><h2>CONTA CORRENTE</h2></Row>
            <Row><p>Conta corrente e de pagamento para negativados</p></Row>
          </Col>
          <Col className={styled.Col}>
            <Row><h2>PIX</h2></Row>
            <Row><p>Pagamentos instantâneos, Transferências, cobranças e QR Code.</p></Row>
          </Col>
        </Row>
        <Row gutter={[48, 48]}>
          <Col className={styled.Col}>
            <Row><h2>MAQUININHA DE VENDAS</h2></Row>
            <Row><p>Maquininhas de vendas com opção dos recebíveis.</p></Row>
          </Col>
          <Col className={styled.Col}>
            <Row><h2>CARTÃO DE CRÉDITO</h2></Row>
            <Row><p>Cartão de crédito internacional Mastercard, Pré pago recarregável.</p></Row>
          </Col>
          <Col className={styled.Col}>
            <Row><h2>E-COMMERCE</h2></Row>
            <Row><p>Recebimentos para suas vendas online de cartão de crédito.</p></Row>
          </Col>
        </Row>
        <Row gutter={[48, 48]}>
          <Col className={styled.Col}>
            <Row><h2>PAGAMENTOS</h2></Row>
            <Row><p>Pagamentos de títulos, taxas e boletos.</p></Row>
          </Col>
          <Col className={styled.Col}>
            <Row><h2>DEPÓSITOS</h2></Row>
            <Row><p>Depósitos por TED, por boleto e por PIX.</p></Row>
          </Col>
          <Col className={styled.Col}>
            <Row><h2>BOLETO</h2></Row>
            <Row><p>Boleto para cobranças de suas vendas ou serviços, emissão de boletos em massa em todos as modalidades inclusive carnê.</p></Row>
          </Col>
        </Row>
        <Row>
          <Col className={styled.Col}>
            <Row><h2>CONTABILIDADE</h2></Row>
            <Row><p>Serviço de contabilidade completa, remota gratuita para as contas PJ, optante do Simples Nacional e MEI.</p></Row>
          </Col>
          <Col className={styled.Col}>
            <Row><h2>GERENCIAMENTO DE VENDAS</h2></Row>
            <Row><p>Gerenciamento de vendas de cartão online e maquininhas e boletos.</p></Row>
          </Col>
          <Col className={styled.Col}>
            <Row><h2>COBRANÇAS</h2></Row>
            <Row><p>Realização de cobranças extrajudicial e judicial gratuitas das vendas via boleto quando da inadimplência.</p></Row>
          </Col>
        </Row>
      </div>
      <div id="App" className={styled.App}>
        <div className={styled.AppTexto}>
          <h1>Baixe aqui</h1>
          <h2>Nosso aplicativo</h2>
          <Link href={linkGooglePlay}><a target="_blank">
            <div className={styled.GooglePlay}>
              <div className={styled.ImageGoogle} />
              <Col>
                <h3>GET IT ON<br/>
                Google Play</h3>
              </Col>
            </div>
          </a></Link>
          <p>Aplicativo em breve disponível em todas as Plataformas</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
