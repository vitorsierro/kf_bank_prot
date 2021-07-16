import { useState } from "react";
import Link from 'next/link';
//CSS
import { Row, Col, Input, Form, Select, Radio, Checkbox } from "antd";
import styled from '../../../../styles/Transferencia.module.css';

const { Option } = Select;

export default function UsuariosModal() {
  const [grupo, setGrupo] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('');



  function onFinish() {
    console.log('Finalizado')
  }
  return (
    <>
      <Form name="validacaoCardModal" size='large' layout="vertical" onFinish={onFinish} requiredMark={false} >
        <Row gutter={[48, 48]} style={{ margin: '0rem 2rem' }}>
          <Col className={styled.Col}>
            <Form.Item label="Grupo"
              rules={[{ colon: false, required: true }]}>
              <Select autoFocus={true} value={grupo}
                onChange={(value) => setGrupo(value)}
              >
                <Option value="">Selecione ..</Option>
                <Option value="grupo1">RH</Option>
                <Option value="grupo2">Administrativo</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col className={styled.Col}>
            <Form.Item label="Nome" help='Nome do item'
              rules={[{ colon: false, required: true }]}>
              <Input id='nome' type='name' size='large'
                placeholder='Nome:' value={nome}
                style={{ borderRadius: '2rem' }}
                onChange={(event) => setNome(event.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[48, 48]} style={{ margin: '0rem 2rem' }}>
          <Col className={styled.Col}>
            <Form.Item label="Email"
              rules={[{ colon: false, required: true }]}>
              <Input
                id='email' type='name' size='large'
                placeholder='Email:' value={email}
                style={{ borderRadius: '2rem' }}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Item>
          </Col>
          <Col className={styled.Col}>
            <Form.Item label="Usuário"
              rules={[{ colon: false, required: true }]}>
              <Input id='usuario' type='name' size='large'
                placeholder='Usuário:' value={usuario}
                style={{ borderRadius: '2rem' }}
                onChange={(event) => setUsuario(event.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[48, 48]} style={{ margin: '0rem 2rem' }}>
          <Col className={styled.Col}>
            <Form.Item label="Senha"
              rules={[{ colon: false, required: true }]}>
              <Input
                id='senha' type='password' size='large'
                placeholder='senha:' value={password}
                style={{ borderRadius: '2rem' }}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Item>
          </Col>
          <Col className={styled.Col}>
            <Form.Item label="Repetir a senha"
              rules={[{ colon: false, required: true }]}>
              <Input
                id='senha' type='password' size='large'
                placeholder='Repetir a senha:' value={repeatPassword}
                style={{ borderRadius: '2rem' }}
                onChange={(event) => setRepeatPassword(event.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
