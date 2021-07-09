//CSS
import styled from '../../../styles/Transferencia.module.css';
import { Row, Col, Form, Input, Button } from 'antd';
//Components
import Link from 'next/link';
import HeaderUser from '../../../Components/user/HeaderUser'
import ResgatesTable from '../../../Components/user/Financeiro/Resgates/ResgatesTable';


export default function Resgate() {
  const onFinish = () => {}
  return(
    <>
    <HeaderUser />
    <Row className={styled.Row}>
    <Form name="validacao" onFinish={onFinish} colon={false}>
      <Row gutter={[36,48]} style={{marginBottom: '1.5rem'}} >
        <Col className={styled.Col}>
          <h2>Resgate</h2>
          <h3>Seu saldo: R$ 50,00</h3>
        </Col>
        <Col className={styled.Col}>
          <h2>Dados Bancários</h2>
          <h5>Por favor, preencha seus dados bancários,<Link href='/Configurações'>clique aqui!</Link></h5>
        </Col>
      </Row>
      <Row gutter={[36,48]}>
        <Col className={styled.Col}>
        <Form.Item label="Valor" required >
          <Input placeholder='Valor:' style={{width:'60%'}} />
        </Form.Item>
        </Col>
        <Col className={styled.Col}>
        <Form.Item label="Resgate Todo Dia (optional)" required >
          <Input placeholder='Resgate Todo Dia:' />
        </Form.Item>
        
        </Col>
      </Row>
      <Row gutter={[36,48]} style={{marginBottom: '1.5rem'}}>
        <Col className={styled.Col}>
          <h5>Valor da tarifa a ser cobrada por resgate: R$ 10,00 + 10.00% de intermediação<br/>
          Horário para resgate, dia útil das 10:00 às 16:00,<br/>
          Após esse horário o resgate será agendado para o próximo dia útil.</h5> 
        </Col>
        <Col className={styled.Col}>
          <h5>Resgate programado para todo dia informado.<br/>
          Datas permitidas entre o dia 1 ao dia 28.<br/>
          Os Resgates só serão executados em dias úteis.<br/>
          Se quiser que todo seu saldo seja resgatado, por favor, não informe valor.<br/>
          Só é possível gerar 1 agendamento, o último sobrescreverá o anterior.<br/>
          Deixe vazio caso não seja um agendamento.</h5> 
        </Col> 
      </Row>
      <Row>
        <Col className={styled.Col}>
          <Button type="primary" className={styled.Button}>
            RESGATAR
          </Button>
        </Col>
      </Row>
      </Form>
    </Row>
    
    <Row className={styled.Row} style={{justifyContent:'initial'}}>
      <h2>Tabela de Resgates</h2>
      <ResgatesTable />
    </Row>
    </>
  );
};
