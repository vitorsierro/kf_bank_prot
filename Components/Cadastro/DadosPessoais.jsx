//Lib


//CSS
import { Form, Input, Button, Row, DatePicker, Col } from 'antd';
import { useState } from 'react';
import styled from '../../styles/Login.module.css';
import button from '../../styles/Transferencia.module.css';
import Transferencia from '../../styles/Transferencia.module.css';


export default function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telResidencial, setTelResidencial] = useState("");
  const [telCelular, setTelCelular] = useState("");
  const [nomeMae, setNomeMae] = useState("");
  const [nomePai, setNomePai] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const dateFormatList = 'DD/MM/YYYY';
  function handleSubmit (event){
    event.preventDefault()
    aoEnviar({ nome, sobrenome, telResidencial, telCelular, nomeMae, nomePai, cpf, dataNascimento })
  }
  
  return (
    <Form
      name="DadosPessoal" initialValues={{ remember: true }}>
      <Row className={styled.Row}>
        <Col className={Transferencia.Col}>
          <Form.Item label="Nome" required className={styled.Input} colon={false}
            tooltip="Esse campo é obrigatorio. Insira seu nome abaixo, por favor."
            rules={[{
              required: true,
              message: 'Por favor digite seu nome!'
            }]}>
            <Input placeholder="Nome" size='large' type="name"
              value={nome} id="name"
              onChange={(event) => { setNome(event.target.value) }}
            />
          </Form.Item>
        </Col>
        <Col className={Transferencia.Col}>
          <Form.Item layout="vertical" label="Sobrenome" required
            tooltip="Esse campo é obrigatorio. Insira seu sobrenome abaixo, por favor." colon={false} className={styled.Input}
            rules={[{
              required: true,
              message: 'Por favor digite seu sobrenome!'
            }]}>
            <Input placeholder="Sobrenome" size='large' type="name"
              value={sobrenome} id="sobrenome"
              onChange={(event) => { setSobrenome(event.target.value) }}
            />
          </Form.Item>

        </Col>
      </Row>
      <Row className={styled.Row}>
        <Col className={Transferencia.Col}>
          <Form.Item label="Telefone Residencial"
            className={styled.Input} colon={false} maxLength={8}
            tooltip="Esse campo não é obrigatório, caso não tenha deixe em branco.">
            <Input placeholder="Telefone Residencial" size='large' type="tel" value={telResidencial} id="telefoneResidencial"
              onChange={(event) => { setTelResidencial(event.target.value) }}
            />
          </Form.Item>
        </Col>
        <Col className={Transferencia.Col}>
          <Form.Item className={styled.Input} layout="vertical" label="Telefone Celular"
            tooltip="Esse campo é obrigatorio. Insira seu telefone celular abaixo, por favor." colon={false} required>
            <Input placeholder="Telefone Celular" size='large'
              type="tel" value={telCelular} id="telefoneCelular"
              onChange={(event) => { setTelCelular(event.target.value) }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row className={styled.Row}>
        <Col className={Transferencia.Col}>
          <Form.Item label="Nome completo da mãe" className={styled.Input}
            tooltip="Esse campo é obrigatório, Insira o nome completo da sua mãe." maxLength={8} colon={false}>
            <Input placeholder="Nome completo da mãe" size='large' type="name" value={nomeMae} id="nomeMae"
              onChange={(event) => { setNomeMae(event.target.value) }}
            />
          </Form.Item>
        </Col>
        <Col className={Transferencia.Col}>
          <Form.Item className={styled.Input} layout="vertical" label="Nome completo do pai"
            tooltip="Esse campo é obrigatorio. Insira o nome completo do seu pai ou marque o campo abaixo, por favor." colon={false} required>
            <Input placeholder="Nome completo do pai" size='large'
              type="name" value={nomePai} id="nomePai"
              onChange={(event) => { setNomePai(event.target.value) }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row className={styled.Row} style={{ marginBottom: '0.5rem' }}>

        <Col className={Transferencia.Col}>
          <Form.Item label="CPF:"
            className={styled.Input} colon={false} maxLength={8}
            tooltip="Esse campo é obrigatório, por favor insira-lo abaixo.">
            <Input placeholder="Digite seu CPF" size='large'
              type="name" value={cpf} id="cpf"
              onChange={(event) => { setCpf(event.target.value) }}
            />
          </Form.Item>
        </Col>
        <Col className={Transferencia.Col}>
          <Form.Item className={styled.Input} layout="vertical" label="Data de nascimento" colon={false} required
            tooltip="Esse campo é obrigatorio. Insira sua data de nascimento abaixo, por favor.">
            <DatePicker format={dateFormatList}
              placeholder="Data de nascimento"
              style={{ borderRadius: '2rem', height: '40px', width: '16rem' }}
              onChange={(_, dateString) => setDataNascimento(dateString)}

            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item  >
        <Button style={{marginRight:'auto'}} className={button.Button} onClick={(event) => handleSubmit(event)}
          type="submit">
          Proximo
        </Button>
      </Form.Item>
    </Form>
  );
};
