import { useState } from "react";
import { Row, Col, Select, Input, Form, DatePicker, Divider, Button } from "antd";
import styled from '../../../../../styles/Transferencia.module.css';
import telefoneDDD from '../../../../../models/telefoneDDD';
import FormEndereco from '../../../../../Components/FormularioComDados/DadosEndereco/FormEndereco'

const { Option } = Select;

export default function ModalCliente() {
  const [telefone, setTelefone] = useState();
  const [codigoDDD, setCodigoDDD] = useState('');
  const [nome, setNome] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [documento, setDocumento] = useState('');
  const [email, setEmail] = useState('');
  const [grupo, setGrupo] = useState('');
  const [plano, setPlano] = useState('');
  const codigoddd = telefoneDDD;
  function onFinish(){
      console.log('Finalizado')
     }
  return(
    <>
     <Form name="validacaoCardModal" size='large' layout="vertical" onFinish={onFinish} requiredMark={false} >
     <Row gutter={[48, 48]}>
          <Col className={styled.Col}>
            <Form.Item label="Grupo">
              <Select value={grupo}
                onChange={(value) => setGrupo(value)}>
                <Option value="">Selecione</Option>
                <Option value="rh">RH</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col className={styled.Col}>
            <Form.Item label="Plano">
              <Select value={plano}
                onChange={(value) => setPlano(value)}>
                <Option value="">Selecione</Option>
                <Option value="visa">Visa</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[48, 48]}>
            <Col className={styled.Col}>
              <Form.Item label="Nome Completo"
                rules={[{ colon: false, required: true }]}>
                <Input
                  id='nomeCompleto' type='name' size='large'
                  placeholder='Nome Completo' value={nome}
                  defaultValue={nome}
                  onChange={(event) => setNome(event.target.value)}
                />
              </Form.Item>
            </Col>
            <Col className={styled.Col}>
            <Input.Group compact={true}>
            <Form.Item label="DDD">
              <Select value={codigoDDD} required style={{ width: '8rem' }}
                onChange={(value) => setCodigoDDD(value)}>
                {codigoddd.map(({ codigo, estado }) => (
                  <Option value={codigo}>{codigo} - {estado} </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Telefone"
              rules={[{ colon: false, required: true }]}>
              <Input placeholder='(xx)xxxxx-xxxx' value={telefone} onChange={(e) => setTelefone(e.target.value)} maxLength={9} type='tel' style={{width: '21rem'}} />
            </Form.Item>
          </Input.Group>
          </Col>
        </Row>
        <Row gutter={[48,48]}>
          <Col className={styled.Col}>
            <Form.Item label="Documento"
              rules={[{ colon: false, required: true }]}>
              <Input.Group compact={true}>
                <Select value={tipoDocumento} style={{ width: '30%' }}
                  onChange={(value) => setTipoDocumento(value)}>
                  <Option value="">Selecione</Option>
                  <Option value="cpf">CPF</Option>
                  <Option value="cnpj">CNPJ</Option>
                </Select>
                { tipoDocumento === 'cnpj' ?
                  <Input placeholder='CNPJ' style={{ width: '70%' }} value={documento}
                  onChange={(e) => setDocumento(e.target.value)} />
                :
                  <Input placeholder='XXX.XXX.XXX-XX' 
                  style={{ width: '70%' }} value={documento}
                  onChange={(e) => setDocumento(e.target.value)} />                
                }
              </Input.Group>
            </Form.Item>
          </Col>
          <Col className={styled.Col}>
              <Form.Item label="Email"
                rules={[{ colon: false, required: true }]}>
                <Input
                  id='email' type='name' size='large'
                  placeholder='contato@kfbank.com.br' value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Item>
            </Col>
        </Row>
        <Divider>Endereço</Divider>
        <FormEndereco />
     </Form>
    </>
  );
};
