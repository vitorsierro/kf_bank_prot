import { useState } from "react";
import { Row, Col, Select, Input, Form, DatePicker } from "antd";
import styled from '../../../styles/Transferencia.module.css';
import telefoneDDD from '../../../models/telefoneDDD'


export default function RecargaModal() {
  const [telefone, setTelefone] = useState();
  const [codigoDDD, setCodigoDDD] = useState('');
  const [operadoras, setOperadoras] = useState('');
  const [valor, setValor] = useState('');
  const [cartao, setCartao] = useState('');
  const [validadeCard, setValidadeCard] = useState('');
  const [cvv, setCvv] = useState('');
  const [senha, setSenha] = useState('');

  const codigoddd = telefoneDDD;
  const onFinish = () => {}

  return (
    <>
      <Form name="validacaoCardModal" size='large' layout="vertical" onFinish={onFinish} requiredMark={false} >
        <Row gutter={[24,24]}>
          <Col className={styled.Col}>
          <Form.Item label="Cartão">
            <Select value={cartao}
              onChange={(value) => setCartao(value)}>
              <Option value="">Selecione</Option>
              <Option value="visa">Visa</Option>
            </Select>
            </Form.Item>
          </Col>
          <Col className={styled.Col}>
            <Input.Group compact={true}>
              <Form.Item label="Validade do Cartão"
                style={{ marginRight: '2rem' }}>
                <DatePicker placeholder='Validade do Cartão'
                  format='MM/YYYY' picker="month" value={validadeCard}
                  onChange={(date) => setValidadeCard(date)} />
              </Form.Item>
              <Form.Item label="CVV" >
                <Input placeholder='cvv:' maxLength={4} value={cvv} onChange={(e) => setCvv(e.target.value)} type='number' />
              </Form.Item>
            </Input.Group>
          </Col>
        </Row>

        <Row gutter={[24,24]} style={{marginRight:'-1rem'}}>          
            <Input.Group compact={true}>
            <Form.Item label="Cartão">
              <Select value={operadoras} style={{marginRight:'2rem'}}
                onChange={(value) => setOperadoras(value)}>
                <Option value="">Selecione</Option>
                <Option value="visa">Tim</Option>
              </Select>
              </Form.Item>
            <Form.Item label="Valor" style={{margin:'0rem 2rem'}}>
              <Select value={valor}
                onChange={(value) => setValor(value)}>
                <Option value="">Selecione</Option>
                <Option value="20">R$ 20,00</Option>
              </Select>
            </Form.Item>
            <Form.Item label="DDD">
              <Select value={codigoDDD} required style={{width:'8rem'}}
                onChange={(value) => setCodigoDDD(value)}>
                {codigoddd.map(({ codigo, estado }) => (
                  <Option value={codigo}>{codigo} - {estado} </Option>
                ))}
              </Select>
              </Form.Item>
              <Form.Item label="Telefone" style={{margin:'0rem 2rem'}}
                rules={[{ colon: false, required: true }]}>
                <Input placeholder='(xx)xxxxx-xxxx' value={telefone} onChange={(e) => setTelefone(e.target.value)} maxLength={9} type='tel' />
              </Form.Item>
              <Form.Item label="Senha">
                <Input.Password placeholder="insira a senha" value= {senha} onChange={(e) => setSenha(e.target.value)} 
                type='password' />
              </Form.Item>
            </Input.Group>
        </Row>

      </Form>
    </>
  );
};
