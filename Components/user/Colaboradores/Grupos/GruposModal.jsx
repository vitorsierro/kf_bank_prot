import { useState } from "react";
import Link from 'next/link';
//CSS
import { Row, Col, Input, Form, Select, Radio, Checkbox } from "antd";
import styled from '../../../../styles/Transferencia.module.css';

const { Option } = Select;

export default function GruposModal() {
  const [unica, setUnica] = useState(true);
  const [descricao, setDescricao] = useState('');
  const [nome, setNome] = useState('');
  const [opcoesPagamento, setOpcoesPagamento] = useState([]);
  const [cobrarMoeda, setCobrarMoeda] = useState('BRL')
  const [valor, setValor] = useState();
  const [email, setEmail] = useState('');

  const optionsWithDisabled = [
    { label: 'Única', value: true },
    { label: 'Aberta', value: false },
  ];
  const options = [
    { label: 'Saldo em conta', value: 'saldo' },
    { label: 'Cartão', value: 'cartao', disable: false },
    { label: 'Boleto', value: 'boleto' },
    { label: 'TED', value: 'ted' },
  ];

  function onFinish() {
    console.log('Finalizado')
  }
  return (
    <>
      <Form name="validacaoCardModal" size='large' layout="vertical" onFinish={onFinish} requiredMark={false} >
        <Row gutter={[48, 48]} style={{ margin: '0rem 2rem' }}>
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
              <h2>Tabela em Construção</h2>
            </Col>
          </Row>
      </Form>
    </>
  );
};
