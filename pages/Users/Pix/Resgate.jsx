//Css
import { Col, Row, Tabs, Select, Button } from "antd";
import { useState } from "react";
import styled from '../../../styles/Transferencia.module.css'
//Components
import HeaderUser from '../../../Components/user/HeaderUser/';
import BeneficiarioPixTable from "../../../Components/user/Pix/BeneficiarioPixTable";
import HistoricoPixTable from "../../../Components/user/Pix/HistoricoPixTable";
import PixModalSelect from "../../../Components/user/Pix/PixModalSelect";

const { TabPane } = Tabs;
const { Option } = Select;

export default function Resgate() {
  const [visibleEnviar, setVisibleEnviar] = useState(false);
  const [visibleHistorico, setVisibleHistorico]
    = useState(false);
  const [visibleBeneficiario, setVisibleBeneficiario]
    = useState(false);
  const [valueSelect, setValueSelect] = useState('');

  function callback(key) {
    console.log(key);
  }
  function handleClickVisible(modo) {
    if (modo === 'enviar') {
      setValueSelect('');
      setVisibleEnviar(true);
      setVisibleHistorico(false);
      setVisibleBeneficiario(false);
    } else if (modo === 'historico') {
      setValueSelect('');
      setVisibleEnviar(false);
      setVisibleHistorico(true);
      setVisibleBeneficiario(false);
    } else {
      setValueSelect('');
      setVisibleEnviar(false);
      setVisibleHistorico(false);
      setVisibleBeneficiario(true);
    }
  }

  return (
    <>
      <HeaderUser />
      <Row className={styled.Row}>
        <Col className={styled.Col}>
          <h2>Seu Saldo</h2>
          <h2>R$ 20,00</h2>
        </Col>
      </Row>
      <Row className={styled.RowResgate}>
        <Button type='primary' className={styled.Button}
          onClick={() => handleClickVisible('enviar')} >
          ENVIAR
        </Button>
        <Button type='primary' className={styled.Button}
          onClick={() => handleClickVisible('historico')}>
            HISTÓRICO
        </Button>
        <Button type='primary' className={styled.Button}
          onClick={() => handleClickVisible('beneficiario')}>
          BENEFICIÁRIO
        </Button>
      </Row>
        {visibleEnviar &&
         <>
         <Row className={styled.RowResgate}>
          <Select defaultValue="" style={{ width: 120 }}
            onChange={(value) => (setValueSelect(value))} >
            <Option value="">Selecione</Option>
            <Option value="dadosBancario">Dados Bancários</Option>
            <Option value="chaveAleatoria">Chave Aleatória</Option>
            <Option value="chaveCelular">Chave Celular</Option>
            <Option value="chaveEmail">Chave Email</Option>
            <Option value="chaveCPFCNPJ">Chave CPF/CNPJ</Option>
          </Select>
          </Row>
          {valueSelect && 
          <Row className={styled.RowResgate}>
          <PixModalSelect value={valueSelect}/> 
          </Row>
          }
          </>}
          <Row>
            {visibleHistorico && <HistoricoPixTable />}
            {visibleBeneficiario && <BeneficiarioPixTable />}
          </Row>
    </>
  );
};
