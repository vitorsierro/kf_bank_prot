import { useState } from "react";
//CSS
import { Row, Col, Input, Form, Select, Radio } from "antd";
import styled from '../../../../../styles/Transferencia.module.css';

const {Option} = Select;

export default function ContasFavorecidasModal() {
  const [numeroBanco, setNumeroBanco] = useState();
  const [nomeBanco, setNomeBanco] = useState("");
  const [agencia, setAgencia] = useState();
  const [agenciaDigito, setAgenciaDigito] = useState();
  const [conta, setConta] = useState();
  const [contaDigito, setContaDigito] = useState();
  const [contaCorrente, setContaCorrente] = useState(true);
  const [titular, setTitular] = useState("");
  const [documento, setDocumento] = useState();
  
  const dateFormatList = 'DD/MM/YYYY';
  const optionsWithDisabled = [
    { label: 'Conta Corrent', value: true },
    { label: 'Conta Poupança', value: false },
  ];

  function onFinish() {
    console.log('Finalizado')
  }
  return (
    <>
      <Form name="validacaoCardModal" size='large' layout="vertical" onFinish={onFinish} requiredMark={false} >
        <Row gutter={[48, 48]} style={{ margin: '0rem 2rem' }}>
          <Col className={styled.Col}>
            <Form.Item label="Número do Banco"
              rules={[{ colon: false, required: true }]}>
              <Select onChange={(value) => setNumeroBanco(value)} 
                style={{ borderRadius: '2rem' }}>
                <Option value="">Selecione ..</Option>
                <Option value="santander">Santander</Option>
                <Option value="bradesco">Bradesco</Option>
                <Option value="itau">Itau</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col className={styled.Col}>
            <Form.Item label="Nome do Banco"
              rules={[{ colon: false, required: true }]}>
              <Input
                id='nomeBanco' type='name' size='large'
                placeholder='Nome do Banco:' value={nomeBanco}
                style={{ borderRadius: '2rem' }}
                onChange={(event) => setNomeBanco(event.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[48, 48]} style={{ margin: '0rem 2rem' }}>
          <Col className={styled.Col}>
            <Input.Group compact={true}>
              <Form.Item label="Agencia (sem dígito)" id="Agencia">
                <Input placeholder='Agência (sem dígito):'
                style={{borderRadius:'2rem'}}  
                value={agencia} 
                onChange={(event) => setAgencia(event.target.value)} />
              </Form.Item>
              <Form.Item label="Agencia (dígito)" id="Agencia" 
                style={{width:"6rem"}}>
                <Input placeholder='Dígito:' 
                value={agenciaDigito}
                style={{borderRadius:'2rem'}} 
                onChange={(event) => setAgenciaDigito(event.target.value)} />
              </Form.Item>
            </Input.Group>
          </Col>
          <Col className={styled.Col}>
            <Input.Group compact={true}>
              <Form.Item id="Conta" label="Conta (sem dígito)">
                <Input placeholder='Conta (sem dígito):' 
                value={conta} style={{borderRadius:'2rem'}} 
                onChange={(event) => setConta(event.target.value)} />
              </Form.Item>
              <Form.Item id="Conta" label="Conta (dígito)"
                style={{width:"6rem"}}>
                <Input placeholder='Dígito:' 
                value={contaDigito} style={{borderRadius:'2rem'}}
                onChange={(event) => setContaDigito(event.target.value)} />
              </Form.Item>
            </Input.Group>
          </Col>
        </Row>
        <Row gutter={[48, 48]} style={{ margin: '0rem 2rem' }}>
          <Col className={styled.Col}>
            <Form.Item label="Tipo de Conta"
              rules={[{ colon: false, required: true }]}>
              <Radio.Group  options={optionsWithDisabled}
                onChange={(e) => setContaCorrente(e.target.value)} 
                value={contaCorrente} optionType="button" 
                style={{ borderRadius: '2rem' }} buttonStyle="solid" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[48, 48]} style={{ margin: '0rem 2rem' }}>
          <Col className={styled.Col}>
            <Form.Item label="Nome do Titular"
              rules={[{ colon: false, required: true }]}>
              <Input
                id='nomeTitular' type='name' size='large'
                placeholder='Nome do Titular:' value={titular}
                style={{ borderRadius: '2rem' }}
                onChange={(event) => setTitular(event.target.value)}
              />
            </Form.Item>
          </Col>
          <Col className={styled.Col}>
            <Form.Item label="Documento"
              rules={[{ colon: false, required: true }]}>
              <Input
                id='documento' type='name' size='large'
                placeholder='Documento:' value={documento}
                style={{ borderRadius: '2rem' }}
                onChange={(event) => setDocumento(event.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
