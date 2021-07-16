//LIB
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

//Components

//CSS
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled from '../styles/Login.module.css';
import buttons from '../styles/Transferencia.module.css'

//IMAGENS
import logo from '../public/img/logo_alterado.png'

export default function Login() {
  const [isCadastrar, setIsCadastrar] = React.useState(false);
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className={styled.Container}>
      <div className={styled.Logo}>
        <Image src={logo} alt="logo da kfbank" /></div>
      <Form
        name="normal_login"
        className={styled.Login}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{
            required: true,
            message: 'Por favor digite seu login!'
          }]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{
            required: true,
            message: 'Por favor digite sua senha!',
          }]}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Lembra-se</Checkbox>
          </Form.Item>
          <Form.Item>
            <Link className="login-form-forgot" href="">
              Recuperar a Senha
            </Link>
          </Form.Item>
        </Form.Item>
          <Button type="primary" htmlType="submit" 
            className={buttons.Button}>
          <Link href="/Users" >
              Logar
          </Link></Button>
          <Button type="primary" htmlType="submit"
            className={buttons.Button}          
            href="/Cadastrar">
              Cadastra-se
          </Button>
      </Form>
    </div>
  )
};
