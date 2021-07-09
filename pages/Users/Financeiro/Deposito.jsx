//CSS
import { Row, Col, Form, Input, Button } from "antd";
import styled from '../../../styles/Transferencia.module.css'

//Components
import { useState } from "react";
import BoletoDepositoTable from "../../../Components/user/Financeiro/Deposito/BoletoDepositoTable";
import TedDepositoTable from "../../../Components/user/Financeiro/Deposito/TedDepositoTable";
import HeaderUser from '../../../Components/user/HeaderUser';


export default function Deposito() {
  const [depositoTed, setDepositoTed] = useState(true);
  const [depositoBoleto, setDepositoBoleto] = useState(false);
  const [descricao, setDescricao] = useState();
  const [valor, setValor] = useState();
  const handleClickTed = () => {
    setDepositoTed(true);
    setDepositoBoleto(false);
  }
  const handleClickBoleto = () => {
    setDepositoTed(false);
    setDepositoBoleto(true);
  }
  return(
    <>
    <HeaderUser />
    <Row className={styled.Row}>
      <Button className={`${styled.Button} ${styled.ButtonNotRadius}`} 
      onClick={() => handleClickTed()}
      >
      DEPÓSITO POR TED
      </Button>
      <Button className={`${styled.Button} ${styled.ButtonNotRadius}`} 
      onClick={() => handleClickBoleto()}
      >
      DEPÓSITO POR BOLETO
      </Button>
      <Button className={`${styled.Button} ${styled.ButtonNotRadius}`} 
        style={{paddingTop: '0.5rem !important'}}
        href='/Users/Pix/Deposito'
      >
      DEPÓSITO POR PIX
      </Button>
    </Row>
      {depositoTed && 
        <>
        <Row className={styled.Row} style={{justifyContent:'initial'}}>
          <Col className={styled.Col}>
            <h3>Conta Nominal</h3>
            <h5>Banco: 274 - Money Plus</h5>
            <h5>ISPB: 11581339</h5>
            <h5>Agência: 0001</h5>
            <h5>Número da Conta:</h5>
            <h5>Conta Pagamento:</h5>
            <h5>Titular</h5>
            <h5>Documento:</h5>
            <br />
            <h5>Depósito e ou transferência para sua conta nominal, o crédito entra automático em sua conta na plataforma, e não precisa enviar comprovante!</h5>
          </Col>
        </Row>
          <Row className={styled.Row} 
            style={{justifyContent:'initial'}}>
            <h3>TED - Últimos Depósitos</h3>
            <TedDepositoTable />
          </Row>
        </>     
      }
      {depositoBoleto && 
        <>
          <Row className={styled.Row} 
            style={{justifyContent:'initial',display:'flex',flexDirection:'column' }}>
            <h2>Boleto</h2>
            <Row style={{margin:'1rem 2rem'}}>
              <Form.Item label="Descrição">
              <Input id='descricao' type='name' size='large'
                style={{width:'26rem'}}
                placeholder='Descrição:' value={descricao} 
                onChange={(event) => setDescricao(event.target.value)}
                />  
              </Form.Item>
            </Row>
            <Row style={{margin:'1rem 2rem'}}>
            <Form.Item label="Valor">
            <Input id='valor' type='name' size='large'
              placeholder='Valor em R$:' value={valor} 
              onChange={(event) => setValor(event.target.value)}
            />  
            <h5>Valor da tarifa a ser cobrada por boleto liquidado: R$ 4,50 + 2.00% de intermediação</h5>
            </Form.Item>
            </Row>
            <Row style={{margin:'1rem 3rem'}}>
              <Button className={styled.Button}>GERAR BOLETO</Button>
            </Row>
            
          </Row>
          <Row className={styled.Row}
            style={{justifyContent:'initial'}}>
            <h3>Boleto - Últimos Depósitos</h3>
            <BoletoDepositoTable />
          </Row>
          
        </>
      }
    </>
  );
};
