import {Row, Col, Form, Select, Input, Button} from 'antd'
import { useState } from 'react';
import FormEndereco from '../FormularioComDados/DadosEndereco/FormEndereco';
import styled from '../../styles/Transferencia.module.css'

const { Option } = Select;

export default function DadosAddress() {
  const [tipoEndereco, setTipoEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [estado, setEstado] = useState('');
  const [bairro, setBairro] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  return(
    <>
    <Form layout='vertical'>
    <Row gutter={[48,48]}>
    

      <Col className={styled.Col} span={8}>
        <Form.Item label="CEP:">
          <Input placeholder='XXXXX-XXX' value={cep} 
            onChange={(e) => setCep(e.target.value)} />  
        </Form.Item>
      </Col>
      <Col className={styled.Col} span={8}>
          <Form.Item label="Estado:">
            <Input placeholder='Estado:' value={estado} 
              onChange={(e) => setEstado(e.target.value)} />  
          </Form.Item>
      </Col>
      <Col className={styled.Col} span={8}>
          <Form.Item label="Bairro:">
            <Input placeholder='Bairro:' value={bairro} 
              onChange={(e) => setBairro(e.target.value)} />  
          </Form.Item>
      </Col>
    </Row>
    <Row gutter={[48,48]}>
      <Col className={styled.Col}>
      <Form.Item label="Endereço:">
        <Input placeholder='Endereço:' value={endereco} 
            onChange={(e) => setEndereco(e.target.value)} />  
      </Form.Item>
      </Col>
      <Col className={styled.Col}>
      <Input.Group compact={true}>
        <Form.Item label="Número:" style={{width:'7rem', marginRight:'3rem'}}>
          <Input placeholder='Número:' value={numero} 
            onChange={(e) => setNumero(e.target.value)} />  
        </Form.Item>
        <Form.Item label="Complemento:" style={{width:'55%'}}>
          <Input placeholder='Complemento:' value={complemento} 
            onChange={(e) => setComplemento(e.target.value)} />  
        </Form.Item>
        </Input.Group>
      </Col>
      </Row>
      <Row>
        <Col style={{width:'85%'}}>
          <Form.Item label="Desde Quando" style={{width:'55%'}}
            help='Mora e ou Trabalha nesse endereço desde quando?'>
            <Input placeholder='desde quando' value={complemento} 
              onChange={(e) => setComplemento(e.target.value)} />  
          </Form.Item>
        </Col>
      </Row>
      <Row style={{marginTop:'2rem'}}>
      <Form.Item >
        <Button type="submit" className={styled.Button}>Anterior</Button>
      </Form.Item>
      <Form.Item style={{marginLeft: 'auto'}}>
        <Button type="submit" className={styled.Button} >
          Proximo
        </Button>
      </Form.Item>
      </Row>
      </Form>
    </>
  );
};
