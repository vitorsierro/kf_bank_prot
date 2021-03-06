import { Row, Col, Select, Input, Form, DatePicker } from "antd";
import { useEffect, useState } from "react";
import telefonePais from "../../../models/telefonePais";
import styled from '../../../styles/Transferencia.module.css'

const { Option } = Select

export default function FormPessoal() {
  const [tipoPessoa, setTipoPessoa ] = useState('');
  const [nome, setNome] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('cpf');
  const [documento, setDocumento] = useState('');
  const [dataNascimento, setDataNascimento] = useState(''); 
  const [sexo, setSexo] = useState('');
  const [email, setEmail] = useState('');
  const [tipoTelefone, setTipoTelefone] = useState('');
  const [telefone, setTelefone] = useState();
  const [codigoDDI, setCodigoDDI] = useState('');
  
  const codPais = telefonePais;
    
  return(
    <>
    <Row gutter={[48,48]}>
      <Col className={styled.Col}>
        <Form.Item label="Tipo de Pessoa" 
          rules={[{ colon:false, required:true}]}>
          <Select defaultValue={tipoPessoa} autoFocus={true}
            value={tipoPessoa} 
            onChange={(value) => setTipoPessoa(value)} 
          >
            <Option value="">Selecione ..</Option>
            <Option value="pessoaFisica">Pessoa Física</Option>
            <Option value="pessoaJuridica">Pessoa Juridica</Option>
          </Select>
        </Form.Item>
      </Col>
      <Col className={styled.Col}>
        <Form.Item label="Nome Completo" 
          rules={[{ colon:false, required:true}]}>
          <Input 
            id='nomeCompleto' type='name' size='large'
            placeholder='Nome Completo' value={nome} 
            defaultValue={nome} 
            onChange={(event) => setNome(event.target.value)}
            />  
        </Form.Item>
      </Col>
    </Row>
    
    <Row gutter={[48,48]}>
    <Col className={styled.Col}>
      <Form.Item label="Documento" 
        rules={[{ colon:false, required:true}]}>
        <Input.Group compact={true}>
          <Select value={tipoDocumento} style={{width:'30%'}}
            onChange={(value) => setTipoDocumento(value)}>
              <Option value="rg">RG</Option>
              <Option value="cpf">CPF</Option>
              <Option value="cnh">CNH</Option>
          </Select>
          {tipoDocumento === 'cpf' &&
            <Input placeholder='XXX.XXX.XXX-XX' style={{width:'70%'}}
            />}
          {tipoDocumento === 'rg' &&
            <Input placeholder='XX.XXX.XXX-X' style={{width:'70%'}}
            />}
          {tipoDocumento === 'cnh' &&
            <Input placeholder='XXXXXXXXXXX' style={{width:'70%'}}
            />} 
        </Input.Group>
      </Form.Item>
    </Col>
    <Row className={styled.Col}>
      <Form.Item label="Data de Nascimento"
        style={{marginLeft:'1rem', marginRight: '4rem'}}
        rules={[{ colon:false, required:true}]}>
        <DatePicker format='DD/MM/YYYY' value={dataNascimento}
          placeholder='DD/MM/YYYY'
          onChange={(date) => setDataNascimento(date)} />
      </Form.Item>
      <Form.Item label="Sexo" style={{width:'50%'}} 
        rules={[{ colon:false, required:true}]}>
        <Select value={sexo} onChange={(value) => setSexo(value)}>
            <Option value="">Selecione</Option>
            <Option value="masculino">Masculino</Option>
            <Option value="feminino">Feminino</Option>
            <Option value="outros">Outros</Option>
        </Select>
      </Form.Item>
      </Row>
  </Row>
  <Row gutter={[48,48]}>
    <Col className={styled.Col}>
      <Form.Item label="Email" 
        rules={[{ colon:false, required:true}]}>
        <Input placeholder='Contato@KFBank.com' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />  
      </Form.Item>
    </Col>
    <Col className={styled.Col}>
      <Input.Group compact={true}>
        <Form.Item label="Tipo do Telefone" 
        style={{marginRight:'3.70rem', width:'10rem'}}
        rules={[{ colon:false, required:true}]}>
        <Select value={tipoTelefone} 
          onChange={(value) => setTipoTelefone(value)}>
            <Option value="">Selecione</Option>
            <Option value="celular">Celular</Option>
            <Option value="residencial">Residencial</Option>
            <Option value="comercial">Comercial</Option>
        </Select>
      </Form.Item>
          <Form.Item label="Telefone" 
            rules={[{ colon:false, required:true}]}>
          <Input style={{width:'15.30rem'}} value={telefone}
          placeholder={(tipoTelefone === 'residencial') ? '+XX(XX)XXXX-XXXX' : '+XX(XX)XXXXX-XXXX' } onChange={(e) => setTelefone(e.target.value)} maxLength={(tipoTelefone === 'celular') ? 14 : 13 } />
      </Form.Item>
    </Input.Group>
    </Col>
  </Row>
  </>
  );
};
