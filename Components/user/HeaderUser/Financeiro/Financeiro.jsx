import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

//Imagens Financeiro
import voltar from '../../../../public/img/voltar.png';
import extrato from '../../../../public/img/rendimentos.png';
import resgate from '../../../../public/img/resgate.png';
import deposito from '../../../../public/img/deposito.png';
import boleto from '../../../../public/img/boleto.png';
import cobranca from '../../../../public/img/pagamentos.png';
import relatorio from '../../../../public/img/relatoriosCobranca.png'


//Vendas a cartão
import card from '../../../../public/img/credit-card.png';

//Pagamentos
import pagamentos from '../../../../public/img/resgate.png';

//CSS
import styled from '../../../../styles/HeaderUser.module.css'
import { Row, Col } from 'antd';

export default function Financeiro({ onClose = {}, onReturn = {} }) {
  const [vendasCartaoIsTrue, setVendasCartaoIsTrue]
    = React.useState(false);
  const [pagamentosIsTrue, setPagamentosIsTrue]
    = React.useState(false);

  const Header = ({ id }) => (
    <Row style={{ justifyContent: 'space-between', marginBottom: '2rem' }}>
      <Image src={voltar} width={30} height={30} className={styled.Close} onClick={() => (handleReturn(id))} />
    </Row>
  )
  const width = 30;
  const height = 30;

  function handleReturn(id) {
    if (id === 1) {
      onReturn()
    }
    else {
      setVendasCartaoIsTrue(false);
      setPagamentosIsTrue(false);
    }

  }
  return (
    <>
      {/* Open if/else de vendas de cartão*/
        vendasCartaoIsTrue ?
          <>
            <Header />
            <Row gutter={[8, 8]}>
              <Col span={8} className={styled.Item} >
                <Link href="/Users/Financeiro/VendasCartao/Transacoes">
                  <li>
                    <Image src={card} width={width} height={height}
                      quality={100} />
                    <span>Transações</span>
                  </li>
                </Link>
              </Col>
              <Col span={8} className={styled.Item} >
                <Link href="/Users/Financeiro/VendasCartao/Recorrencia">
                  <li>
                    <Image src={card} width={width} height={height}
                      quality={100} />
                    <span>Recorrência</span>
                  </li>
                </Link>
              </Col>
              <Col span={8} className={styled.Item} >
                <Link href="/Users/Financeiro/VendasCartao/Estabelecimento">
                  <li>
                    <Image src={card} width={width} height={height}
                      quality={100} />
                    <span>Estabelecimento</span>
                  </li>
                </Link>
              </Col>
            </Row>
          </>
          :
          <>
            { /*Open if else pagamento */
              pagamentosIsTrue ?
                <>
                  <Header />
                  <Row gutter={[8, 8]}>
                    <Col span={8} className={styled.Item} >
                      <Link href="/Users/Financeiro/Pagamentos/Transacoes">
                        <li>
                          <Image src={card} width={width} height={height} quality={100} />
                          <span>Transferências</span>
                        </li>
                      </Link>
                    </Col>

                    <Col span={8} className={styled.Item} >
                      <Link href="/Users/Financeiro/Pagamentos/Titulos">
                        <li>
                          <Image src={card} width={width} height={height}
                            quality={100} />
                          <span>Título</span>
                        </li>
                      </Link>
                    </Col>

                    <Col span={8} className={styled.Item} >
                      <Link href="/Users/Financeiro/Pagamentos/ContasFavorecidas">
                        <li>
                          <Image src={card} width={width} height={height}
                            quality={100} />
                          <span>Contas Favorecidas</span>
                        </li>
                      </Link>
                    </Col>
                  </Row>
                </>
                :
                <>
                  <Header id={1} />
                  <Row gutter={[8, 8]}>
                    <Col span={8} className={styled.Item} >
                      <Link href="/Users/Financeiro/Extrato">
                        <li>
                          <Image src={extrato} width={width} height={height}
                            quality={100} />
                          <span>Extrato</span>
                        </li>
                      </Link>
                    </Col>
                    <Col span={8} className={styled.Item} >
                      <Link href="/Users/Financeiro/Resgate">
                        <li>
                          <Image src={resgate} width={width} height={height}
                            quality={100} />
                          <span>Resgate</span>
                        </li>
                      </Link>
                    </Col>
                    <Col span={8} className={styled.Item} >
                      <Link href="/Users/Financeiro/Deposito">
                        <li>
                          <Image src={deposito} width={width} height={height}
                            quality={100} />
                          <span>Deposito</span>
                        </li>
                      </Link>
                    </Col>
                  </Row>


                  <Row gutter={[8, 8]}>
                    <Col span={8} className={styled.Item} >
                      <Link href="/Users/Financeiro/Boletos">
                        <li>
                          <Image src={boleto} width={width} height={height}
                            quality={100} />
                          <span>Boletos</span>
                        </li>
                      </Link>
                    </Col>
                    <Col span={8} className={styled.Item} >
                      <Link href="/Users/Financeiro/Cobranca">
                        <li>
                          <Image src={cobranca} width={width} height={height}
                            quality={100} />
                          <span>Cobrança</span>
                        </li>
                      </Link>
                    </Col>

                    <Col span={8} className={styled.Item} >
                      <Link href="/Users/Financeiro/RelatorioCobrancas" >
                        <li>
                          <Image src={relatorio} width={width} height={height}
                            quality={100} />
                          <span>Relatório de Cobranças</span>
                        </li>
                      </Link>
                    </Col>
                  </Row>
                  <Row gutter={[8, 8]}>
                    <Col span={8} className={`${styled.ItemAnimado} ${styled.Item}`} >
                      <button onClick={
                        () => setVendasCartaoIsTrue(!vendasCartaoIsTrue)}
                        className={styled.ItemBtn}>
                        <li>
                          <Image src={card} width={width} height={height}
                            quality={100} />
                          <span>Vendas a Cartão</span>
                        </li>
                      </button>
                    </Col>
                    <Col span={8} className={`${styled.ItemAnimado} ${styled.Item}`} >
                      <button onClick={
                        () => setPagamentosIsTrue(!pagamentosIsTrue)}
                        className={styled.ItemBtn}>
                        <li>
                          <Image src={pagamentos} width={width} height={height}
                            quality={100} />
                          <span>Pagamentos</span>
                        </li>
                      </button>
                    </Col>
                  </Row>
                </>
   /*Fecha if/Else pagamento*/}
          </>
  /* Fecha if/else de vendas de cartão*/}
    </>
  )
};
