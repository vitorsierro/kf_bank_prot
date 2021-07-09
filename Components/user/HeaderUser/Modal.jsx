import React from 'react';
//Libs
import Link from 'next/link';
import Image from 'next/image';


//Images
import calculadora from '../../../public/img/calculadora.png';
import voltar from '../../../public/img/voltar.png';

//pix
import pix from '../../../public/img/pix.png';
import deposito from '../../../public/img/deposito.png'
import resgate from '../../../public/img/resgate.png';
import cobranca from '../../../public/img/pagamentos.png'

//kfbank card
import card from '../../../public/img/credit-card.png';
import recarga from '../../../public/img/recarga.png'

//Colaboradores
import colaboradores from '../../../public/img/colaboradores.png'
import individual from '../../../public/img/individual.png'

import transferencia from '../../../public/img/transferencia.png';
import rendimentos from '../../../public/img/rendimentos.png';
import investimentos from '../../../public/img/investimentos.png';

//CSS 
import styled from '../../../styles/HeaderUser.module.css'
import { Row, Col } from 'antd';
import Financeiro from './Financeiro/Financeiro';
 
export default function Modal({ onClose = () => { } }) {
  const [pixIsTrue, setPixIsTrue] = React.useState(false);
  const [financeiroIsTrue, setFinanceiroIsTrue] = React.useState(false);
  const [kfBankIsTrue, setKfBankIsTrue] = React.useState(false);
  const [colaboradoresIsTrue, setColaboradoresIsTrue]
    = React.useState(false);
  const informeRendimento = 'https://www.google.com/'
  const width = 30;
  const height = 30;
  const Header = () => (
    <Row style={{ justifyContent: 'space-between', marginBottom: '2rem' }}>
      <Image src={voltar} width={30} height={30} className={styled.Close} onClick={() => handleReturn()} />
    </Row>
  )
  function handleReturn(){
    setPixIsTrue(false);
    setFinanceiroIsTrue(false);
    setKfBankIsTrue(false);
    setColaboradoresIsTrue(false);
  }
  
  return (

    <div className={styled.Modal}>
    {
      financeiroIsTrue ?
        <>
          <Financeiro onClose={onClose} onReturn={handleReturn} />
        </>
        :
        <>
    {pixIsTrue ?
      <> 
     <Header />
      <Row gutter={[8, 8]}>
          <Col span={8} className={styled.Item} >
            <Link href="/Users/Pix/Deposito">
              <li>
                <Image src={deposito} width={width} height={height}
                  quality={100} />
                <span>Depósito</span>
              </li>
            </Link>
          </Col>
          <Col span={8} className={styled.Item} >
            <Link href="/Users/Pix/Resgate">
              <li>
                <Image src={resgate} width={width} height={height}
                  quality={100} />
                <span>Resgate e Pagamentos</span>
              </li>
            </Link>
          </Col>
          <Col span={8} className={styled.Item} >
            <Link href="/Users/Pix/Cobranca">
              <li>
                <Image src={cobranca} width={width} height={height}
                  quality={100} />
                <span>Cobrança</span>
              </li>
            </Link>
          </Col>
        </Row>
      </>
      :
      <>
    {kfBankIsTrue ?
      <>
        <Header />
        <Row gutter={[8, 8]}>
          <Col span={8} className={styled.Item} >
            <Link href="/Users/KFCard/KFCard">
              <li>
                <Image src={card} width={width} height={height}
                  quality={100} />
                <span>KF Bank Card</span>
              </li>
            </Link>
          </Col>
          <Col span={8} className={styled.Item} >
            <Link href="/Users/KFCard/Recarga">
              <li>
                <Image src={recarga} width={width} height={height}
                  quality={100} />
                <span>Recarga de Celular</span>
              </li>
            </Link>
          </Col>
        </Row>
      </>
      :
    <>
      <Row gutter={[8, 8]}>
        <Col span={8} className={`${styled.ItemAnimado} ${styled.Item}`} >
          <button onClick={
            () => setPixIsTrue(!pixIsTrue)}
            className={styled.ItemBtn}>
            <li>
              <Image src={pix} width={width} height={height}
                quality={100} />
              <span>Pix</span>
            </li>
          </button>
        </Col>
        <Col span={8} className={`${styled.ItemAnimado} ${styled.Item}`} >
          <button onClick={
            () => setFinanceiroIsTrue(!financeiroIsTrue)}
            className={styled.ItemBtn}>
            <li>
              <Image src={calculadora} width={width} height={height}
                quality={100} />
              <span>Financeiro</span>
            </li>
          </button>
        </Col>
        <Col span={8} className={`${styled.ItemAnimado} ${styled.Item}`} >
          <button onClick={
            () => setKfBankIsTrue(!kfBankIsTrue)}
            className={styled.ItemBtn}>
            <li>
              <Image src={card} width={width} height={height}
                quality={100} />
              <span>KF Bank Card</span>
            </li>
          </button>
        </Col></Row>

      <Row gutter={[8, 8]}>
        <Col span={8} className={styled.Item} >
          <Link href="/Users/Transferencia">
            <li>
              <Image src={transferencia} width={width} height={height}
                quality={100} />
              <span>Transferência Entre Usuários</span>
            </li>
          </Link>
        </Col>
        <Col span={8} className={styled.Item} >
          <Link href="/Users/Investimentos">
            <li>
              <Image src={investimentos} width={width} height={height}
                quality={100} />
              <span>Investimentos</span>
            </li>
          </Link>
        </Col>
        <Col span={8} className={styled.Item} >
          <Link href={informeRendimento}><a target='_Blank'>
            <li>
              <Image src={rendimentos} width={width} height={height}
                quality={100} />
              <span>Informe Rendimentos</span>
            </li></a>
          </Link>
        </Col>
      </Row>
    </>
    }
    {/* Fechar o else de kfbank Credit-Card*/}
    </>
    }
    {/*O de baixo fechar o else de Negocios e a div fecha tudo*/}
    </>
    }
    </div>
  )
};
