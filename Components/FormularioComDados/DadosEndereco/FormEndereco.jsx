import { Col, Row, Input, Select, Form } from "antd";
import { useState } from "react";

import styled from '../../../styles/Transferencia.module.css';

const { Option } = Select;


export default function FormEndereco() {
  const [tipoEndereco, setTipoEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [estado, setEstado] = useState('');
  const [bairro, setBairro] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  return(
    <>
    <Row gutter={[48,48]}>
      <Col className={styled.Col}>
        <Form.Item label="Tipo do Endereço:">
          <Select value={tipoEndereco} 
            onChange={(value) => setTipoEndereco(value)}>
              <Option value="">Selecione</Option>
              <Option value="residencial">Residencial</Option>
              <Option value="comercial">Comercial</Option>
              <Option value="outros">Outros</Option>
          </Select>
        </Form.Item>
      </Col>
      <Col className={styled.Col}>
        <Form.Item label="CEP:">
          <Input placeholder='xxxxx-xxx' value={cep} 
            onChange={(e) => setCep(e.target.value)} />  
        </Form.Item>
      </Col>
    </Row>
    <Row gutter={[48,48]}>
      <Col className={styled.Col}>
        <Form.Item label="Estado:">
          <Input placeholder='Estado:' value={estado} 
            onChange={(e) => setEstado(e.target.value)} />  
        </Form.Item>
      </Col>
      <Col className={styled.Col}>
        <Form.Item label="Bairro:">
          <Input placeholder='Bairro:' value={bairro} 
            onChange={(e) => setBairro(e.target.value)} />  
        </Form.Item>
      </Col>
    </Row>
    <Row gutter={[48,48]}>
      <Col className={styled.Col}>
      <Form.Item label="Endereço:" >
        <Input placeholder='endereço:' value={endereco} 
            onChange={(e) => setEndereco(e.target.value)} />  
      </Form.Item>
      </Col>
      <Col className={styled.Col}>
      <Input.Group compact={true}>
        <Form.Item label="Número:" style={{width:'6rem', marginRight:'2rem'}}>
          <Input placeholder='Número:' value={numero} 
            onChange={(e) => setNumero(e.target.value)} />  
        </Form.Item>
        <Form.Item label="Complemento:" style={{width:'50%'}}>
          <Input placeholder='Complemento:' value={complemento} 
            onChange={(e) => setComplemento(e.target.value)} />  
        </Form.Item>
        </Input.Group>
      </Col>
      </Row>
      
    </>
  );
};
