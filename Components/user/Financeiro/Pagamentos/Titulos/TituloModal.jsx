import { useState } from "react";
//CSS
import { Row, Col, Input, Form, DatePicker } from "antd";
import styled from '../../../../../styles/Transferencia.module.css';


export default function TituloModal() {
  const [linhaDig, setLinhaDig]  = useState('');
  const [descricao, setDescricao]  = useState('');
  const [vencimento, setVencimento]  = useState();
  const [agendarPag, setAgendarPag]  = useState();
  const [valor, setValor]  = useState();
  const dateFormatList = 'DD/MM/YYYY';
  
  function onFinish() {
    console.log('Finalizado')
  }
  return (
    <>
      <Form name="validacaoCardModal" size='large' layout="vertical" onFinish={onFinish} requiredMark={false} >
        <Row gutter={[48, 48]} style={{margin:'0rem 2rem'}}>
          <Col className={styled.Col}>
            <Form.Item label="Linha Digitável"
              help='Linha digitável do código de barras, dados cadastrados incorretamente é de sua inteira responsábilidade'
              rules={[{ colon: false, required: true }]}>
              <Input
                id='linhaDig' type='name' size='large'
                placeholder='Linha Digitável:' value={linhaDig}
                style={{ borderRadius: '2rem'}}
                onChange={(event) => setLinhaDig(event.target.value)}
              />
            </Form.Item>
          </Col>
          <Col className={styled.Col}>
            <Form.Item label="Descrição"
              help='Descrição para sua identificação'
              rules={[{ colon: false, required: true }]}>
              <Input
                id='descricao' type='name' size='large'
                placeholder='Descrição:' value={descricao}
                style={{ borderRadius: '2rem'}}
                onChange={(event) => setDescricao(event.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[48, 48]} style={{margin:'0rem 2rem'}}>
          <Col className={styled.Col}>
          <Form.Item label="Vencimento"
              rules={[{ colon: false, required: true }]}>
            <DatePicker format={dateFormatList}
              placeholder="Vencimento:"
              style={{ borderRadius: '2rem', height: '40px', width: '20rem' }}
              onChange={(_, dateString) => setVencimento(dateString)} 
            />
          </Form.Item>
          </Col>
          <Col className={styled.Col}>
          <Form.Item label="Agendar Pagamento"
            rules={[{ colon: false, required: true }]}>
            <DatePicker format={dateFormatList}
              placeholder="Agendar Pagamento:"
              style={{ borderRadius: '2rem', height: '40px', width: '20rem' }}
              onChange={(_, dateString) => setAgendarPag(dateString)} 
            />
          </Form.Item>
          </Col>
        </Row>
        <Row gutter={[48, 48]} style={{margin:'0rem 2rem'}}>
          <Col className={styled.Col}>
          <Form.Item label="Valor"
            help='Valor a ser pago, se houver desconto o considere'
            rules={[{ colon: false, required: true }]}>
            <Input id='Valor' type='name' size='large'
              placeholder='Valor:' value={valor}
              style={{ borderRadius: '2rem'}}
              onChange={(event) => setValor(event.target.value)} />
          </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
