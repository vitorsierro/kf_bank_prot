import styled from '../../../../../styles/Transferencia.module.css';
import { Row, Col, Input, Switch, Form, Divider, Select, DatePicker } from 'antd';
import { useState } from 'react';
import FormEndereco from '../../../../FormularioComDados/DadosEndereco/FormEndereco'
import telefonePais from '../../../../../models/telefonePais';
import telefoneDDD from '../../../../../models/telefoneDDD';

const { Option } = Select

export default function ModalEstabelecimento() {
  const [tipoEstabelecimento, setTipoEstabelecimento] = useState('');
  const [nomeFatura, setNomeFatura] = useState('');
  const [atividadeNegocio, setAtividadeNegocio] = useState('');
  const [nome, setNome] = useState('');
  const [documento, setDocumento] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState();
  const [codigoDDI, setCodigoDDI] = useState('');
  const [codigoDDD, setCodigoDDD] = useState('');
  const [tipoEndereco, setTipoEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [estado, setEstado] = useState('');
  const [bairro, setBairro] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');

  const codPais = telefonePais;
  const codigoddd = telefoneDDD;

  return (
    <>
      <Form layout='vertical'>
      <Divider>Dados do Estabelecimento</Divider>
      <Row gutter={[48, 48]}>
        <Col className={styled.Col}>
          <Form.Item label="Na Fatura"
            rules={[{ colon: false, required: true }]}>
            <Input
              id='fatura' type='name' placeholder='Aparece na Fatura' value={nomeFatura} onChange={(event) => setNomeFatura(event.target.value)}
            />
            <h6>Nome Fantasia. Esse é o nome que aparece na fatura associado a transação. Importante ser fácil de reconhecer para evitar chargebacks</h6>
          </Form.Item>
        </Col>
        <Col className={styled.Col}>
          <Input.Group compact={true}>
          <Form.Item label="Tipo de Pessoa" 
          style={{ marginRight:'3rem'}}>
            <Switch checkedChildren="Pessoa Fisica" unCheckedChildren="Pessoa Juridica" size='large' 
            checked={tipoEstabelecimento}
            onChange={(checked) => setTipoEstabelecimento(checked)}/>
          </Form.Item>
            <Form.Item label="Atividade do seu Negócio">
              <Select value={atividadeNegocio} required
                onChange={(value) => setAtividadeNegocio(value)}
                style={{width: '18rem'}}>
                  <Option value=''>Selecione..</Option>
                  <Option value='atacadistas'>Atacadistas - Venda Por Atacado(Wholesale Clubs)</Option>
                  <Option value='supermercados'>Açogueiro (Freezer/Meat Lockers)</Option>
              </Select>
            </Form.Item>
          </Input.Group>
        </Col>
      </Row>
        <Divider>Dados Pessoais</Divider>
        <Row gutter={[48, 48]}>
          <Col className={styled.Col}>
            <Form.Item label="Nome Completo"
              rules={[{ colon: false, required: true }]}>
              <Input
                id='nomeCompleto' type='name' placeholder='Nome Completo' value={nome} onChange={(event) => setNome(event.target.value)}
              />
            </Form.Item>
          </Col>
          <Col className={styled.Col}>
            <Input.Group compact={true}>
              <Form.Item label="CPF" rules={[{ colon: false, required: true }]} style={{width:'10.75rem', marginRight:'2rem'}}>
                <Input placeholder='XXX.XXX.XXX-XX'  />
              </Form.Item>
              <Form.Item label="Data de Nascimento"
                rules={[{ colon: false, required: true }]}>
                <DatePicker format='DD/MM/YYYY' value={dataNascimento}
                  placeholder='DD/MM/YYYY'
                  onChange={(date) => setDataNascimento(date)} />
              </Form.Item>
            </Input.Group>
          </Col>
        </Row>
        <Row gutter={[48, 48]}>
          <Col className={styled.Col}>
            <Form.Item label="Email"
              rules={[{ colon: false, required: true }]}>
              <Input placeholder='contato@kfbank.com' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>
          </Col>
          <Col className={styled.Col}>
            <Input.Group compact={true}>
            <Form.Item label="DDI"
                rules={[{ colon: false, required: true }]}>
                <Select value={codigoDDI} required 
                  style={{width:'6rem'}}
                  onChange={(value) => setCodigoDDI(value)}>
                  {codPais.map(({ fone }) => (
                    <Option value={fone}>{fone.replace(/^0*/, '+')}</Option>
                  ))}
                </Select>
            </Form.Item>
            <Form.Item label="DDD">
              <Select value={codigoDDD} required style={{ width: '5rem' }}
                onChange={(value) => setCodigoDDD(value)}>
                {codigoddd.map(({ codigo }) => (
                  <Option value={codigo}>({codigo})</Option>
                ))}
              </Select>
            </Form.Item>
              <Form.Item label="Telefone"
                rules={[{ colon: false, required: true }]}>
                <Input placeholder='XXXXX-XXXX' value={telefone} onChange={(e) => setTelefone(e.target.value)} maxLength={9} />
              </Form.Item>
            </Input.Group>
          </Col>
        </Row>
        <Divider>Seu Endereço</Divider>
        <Row gutter={[48,48]}>
      <Col className={styled.Col}>
        <Form.Item label="CEP:">
          <Input placeholder='XXXXX-XXX' value={cep} 
            onChange={(e) => setCep(e.target.value)} />  
        </Form.Item>
      </Col>
      <Col className={styled.Col}>
      <Input.Group compact={true}>
        <Form.Item label="Estado:" 
        style={{width:'30%', marginRight:'5rem'}}>
          <Input placeholder='Estado:' value={estado} 
            onChange={(e) => setEstado(e.target.value)} />  
        </Form.Item>
        <Form.Item label="Bairro:" style={{width:'30%'}}>
          <Input placeholder='Bairro:' value={bairro} 
            onChange={(e) => setBairro(e.target.value)} />  
        </Form.Item>
        </Input.Group>
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
      </Form>
    </>
  );
};
