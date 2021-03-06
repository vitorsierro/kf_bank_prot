import { useEffect, useState } from "react";
import { Row, Col, Select, Input, Form, DatePicker, Divider, Button } from "antd";
import styled from '../../../../../styles/Transferencia.module.css';
import telefoneDDD from '../../../../../models/telefoneDDD';
import FormEndereco from '../../../../../Components/FormularioComDados/DadosEndereco/FormEndereco'

const { Option } = Select;

export default function FinGerar() {
  const [telefone, setTelefone] = useState();
  const [nome, setNome] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [documento, setDocumento] = useState('');
  const [email, setEmail] = useState('');
  const [grupo, setGrupo] = useState('');
  const [plano, setPlano] = useState('');
  const [valor, setValor] = useState();
  const [instrucoes, setInstrucoes] = useState('');
  const [dataVencimento, setDataVencimento] = useState();
  const [dataAceitoPagamento, setDataAceitoPagamento] = useState();
  const [multa, setMulta] = useState('');
  const [juros, setJuros] = useState('');
  const [desconto, setDesconto] = useState('');

  const codigoddd = telefoneDDD;
  function onFinish(){
      console.log('Finalizado')
     }


  return (
    <Row className={styled.Row} 
      style={{width:'64.5rem',marginRight:'unset !important'}}>
      <Form name="validacaoCardModal" size='large' layout="vertical" requiredMark={false}
      >
        <Row gutter={[48, 48]}>
          <Col className={styled.Col}>
            <Form.Item label="Grupo">
              <Select value={grupo}
                onChange={(value) => setGrupo(value)}>
                <Option value="">Selecione..</Option>
                <Option value="rh">RH</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col className={styled.Col}>
            <Form.Item label="Plano">
              <Select value={plano}
                onChange={(value) => setPlano(value)}>
                <Option value="">Selecione..</Option>
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
            <Form.Item label="Telefone"
              rules={[{ colon: false, required: true }]}>
              <Input placeholder='(XX)XXXXX-XXXX' value={telefone} onChange={(e) => setTelefone(e.target.value)} maxLength={11} type='tel' />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[48,48]}>
          <Col className={styled.Col}>
            <Form.Item label="Documento"
              rules={[{ colon: false, required: true }]}>
              <Input.Group compact={true}>
                <Select value={tipoDocumento} style={{ width: '30%' }}
                  onChange={(value) => setTipoDocumento(value)}>
                  <Option value="">Selecione..</Option>
                  <Option value="cpf">CPF</Option>
                  <Option value="cnpj">CNPJ</Option>
                </Select>
                { tipoDocumento !== 'cpf' ?
                  <Input placeholder='CNPJ' style={{ width: '70%' }} value={documento}
                  onChange={(e) => setDocumento(e.target.value)} />
                :  
                  <Input placeholder='XXX.XXX.XXX-XX' style={{ width: '70%' }} value={documento}
                  onChange={(e) => setDocumento(e.target.value)} 
                  />              
                }
              </Input.Group>
            </Form.Item>
          </Col>
          <Col className={styled.Col}>
              <Form.Item label="Email"
                rules={[{ colon: false, required: true }]}>
                <Input
                  id='email' type='name' size='large'
                  placeholder='Contato@KFBank.com.br' value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Item>
            </Col>
        </Row>
        <Divider><h2>Endere??o</h2></Divider>
        <FormEndereco />
        <Divider><h2>Cobran??a</h2></Divider>
        <Row gutter={[48,48]}>
          <Col className={`${styled.Col} ${styled.Alert}`}>
            <Form.Item label="Valor"
              rules={[{ colon: false, required: true }]}
              help='Valor da tarifa a ser cobrada por boleto liquidado: R$ 4,50 + 2.00% de intermedia????o'>
              <Input
                id='email' type='name' size='large'
                placeholder='Valor:' value={valor}
                onChange={(event) => setValor(event.target.value)}
              />
            </Form.Item>
          </Col>
          <Col className={styled.Col} >
              <Form.Item label="Instru????es"
                rules={[{ colon: false, required: true }]}>
                <Input
                  id='email' type='name' size='large'
                  placeholder='Instru????es:' value={instrucoes}
                  onChange={(event) => setInstrucoes(event.target.value)}
                />
              </Form.Item>
            </Col>
        </Row>
        <Row gutter={[48,48]}>
          <Col className={styled.Col}>
            <Form.Item label="Data do Vencimento"
              rules={[{ colon: false, required: true }]}>
               <DatePicker format='DD/MM/YYYY' value={dataVencimento}
                placeholder='Data do Vencimento:'
                style={{width:'23rem'}} 
                onChange={(date) => setDataVencimento(date)} />
            </Form.Item>
          </Col>
          <Col className={`${styled.Col} ${styled.Alert}`}>
              <Form.Item label="Pagamento Aceito At??"
                rules={[{ colon: false, required: true }]}>
                 <DatePicker format='DD/MM/YYYY'
                  value={dataAceitoPagamento}  style={{width:'23rem'}}
                  placeholder='Pagamento Aceito At??'
                  onChange={(date) => setDataAceitoPagamento(date)} />
              </Form.Item>
            </Col>
        </Row>
        <Row gutter={[48, 48]}>
          <Col className={styled.Col}>
            <Form.Item label="Multa:">
              <Select value={multa}
                onChange={(value) => setMulta(value)}>
                <Option value="">N??o cobrar</Option>
                <Option value="valorFixo">Valor Fixo</Option>
                <Option value="valorPorcentagem">Valor em Porcentagem</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col className={styled.Col}>
            <Form.Item label="Juros">
              <Select value={juros}
                onChange={(value) => setJuros(value)}>
                 <Option value="">N??o cobrar</Option>
                <Option value="valorFixo">Valor Fixo ao Dia</Option>
                <Option value="valorPorcentagem">
                  Valor em Porcentagem ao M??s</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[48, 48]}>
          <Col className={styled.Col}>
            <Form.Item label="Desconto:">
              <Select value={desconto}
                onChange={(value) => setDesconto(value)}>
                 <Option value="">N??o conceder</Option>
                <Option value="valorFixo">Valor Fixo</Option>
                <Option value="valorPorcentagem">Valor em Porcentagem</Option>
              </Select>
            </Form.Item>
          </Col>
          </Row>
          <br/>
          <Row gutter={[48, 48]}>
          <Col className={styled.Col}>
            <Button key="submit"  onClick={() => onFinish}
              className={styled.Button}>
                GERAR BOLETO
            </Button>
          </Col>
          </Row>
      </Form>
    </Row>
  )
};
