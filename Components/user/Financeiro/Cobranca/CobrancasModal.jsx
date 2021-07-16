import { useState } from "react";
import Link from 'next/link';
//CSS
import { Row, Col, Input, Form, Select, Radio, Checkbox } from "antd";
import styled from '../../../../styles/Transferencia.module.css';

const { Option } = Select;

export default function CobrancasModal() {
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
          <Form.Item label="Única ou aberta"
            rules={[{ colon: false, required: true }]}>
            <Radio.Group options={optionsWithDisabled}
              onChange={(e) => setUnica(e.target.value)}
              value={unica} optionType="button"
              style={{ borderRadius: '2rem' }} buttonStyle="solid" />
            <p>Selecionando a <ins>opção única</ins>, a cobrança poderá ser <ins>recebida uma única vez</ins>. A <ins>opção aberta</ins> deixará a cobrança, <ins>se ativa</ins>, passível de <ins>recebê-la inúmeras vezes</ins> através do link gerado.
              Uma cobrança aberta irá gerar cobranças únicas quando iniciada por algum pagador.</p>
          </Form.Item>
        </Row>
        {unica ?
          <Row gutter={[48, 48]} style={{ margin: '0rem 2rem' }}>
            <Col className={styled.Col}>
              <Form.Item label="Descrição"
                help='Pequena descrição'
                rules={[{ colon: false, required: true }]}>
                <Input id='descricao' type='name' size='large'
                  placeholder='Descrição:' value={descricao}
                  style={{ borderRadius: '2rem' }}
                  onChange={(event) => setDescricao(event.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          :

          <Row gutter={[48, 48]} style={{ margin: '0rem 2rem' }}>
            <Col className={styled.Col}>
              <Form.Item label="Nome" help='Nome do item'
                rules={[{ colon: false, required: true }]}>
                <Input
                  id='nome' type='name' size='large'
                  placeholder='Nome:' value={nome}
                  style={{ borderRadius: '2rem' }}
                  onChange={(event) => setNome(event.target.value)}
                />
              </Form.Item>
            </Col>
            <Col className={styled.Col}>
              <Form.Item label="Descrição"
                help='Pequena descrição'
                rules={[{ colon: false, required: true }]}>
                <Input
                  id='descricao' type='name' size='large'
                  placeholder='Descrição:' value={descricao}
                  style={{ borderRadius: '2rem' }}
                  onChange={(event) => setDescricao(event.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
        }
        <br />
        <Row gutter={[48, 48]} style={{ margin: '0rem 2rem' }}>
          <Col className={styled.Col}>
            <Form.Item label="Opções de Pagamento"
              rules={[{ colon: false, required: true }]}>
              <Checkbox.Group options={options} onChange={(checkedValues) => setOpcoesPagamento(checkedValues)} />
              <h4>Cartão,<Link href='/Users/Financeiro/VendasCartao/Estabelecimento' >clique aqui</Link> e abra seu estabelecimento para opção de pagamento a cartão!</h4>
            </Form.Item>
          </Col>
          <Col className={styled.Col}>
            <Form.Item label="Cobrar no valor da moeda"
              rules={[{ colon: false, required: true }]}>
              <Radio.Group value={cobrarMoeda}
                onChange={(e) => setCobrarMoeda(e.target.value)} >
                <Radio value='BRL'>BRL</Radio>
                <Radio value='EURO'>EURO</Radio>
                <Radio value='DOLAR'>DOLAR</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[48, 48]} style={{ margin: '0rem 2rem' }}>
          <Col className={styled.Col}>
            <Form.Item label="Valor"
              help='Deixe o valor em branco se quiser que o cliente defina o valor!'
              rules={[{ colon: false, required: true }]}>
              <Input
                id='valor' type='name' size='large'
                placeholder='Valor em R$:' value={valor}
                style={{ borderRadius: '2rem' }}
                onChange={(event) => setValor(event.target.value)}
              />
            </Form.Item>
          </Col>
          <Col className={styled.Col}>
            <Form.Item label="Email"
              help='E-mail para onde a cobrança será enviada em caso de cobrança única, e em caso de cobrança aberta, você que recerá o link da cobrança por e-mail!'
              rules={[{ colon: false, required: true }]}>
              <Input
                id='email' type='name' size='large'
                placeholder='Email:' value={email}
                style={{ borderRadius: '2rem' }}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
