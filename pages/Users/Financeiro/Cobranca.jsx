//CSS
import { Row, Col, Modal, Button, Form, Radio } from "antd";
import styled from '../../../styles/Transferencia.module.css';

//Components
import { useState } from "react";
import HeaderUser from '../../../Components/user/HeaderUser';
import CobrancaModal from '../../../Components/user/Financeiro/Cobranca/CobrancasModal'
import CobrancasAbertasTable from '../../../Components/user/Financeiro/Cobranca/CobrancasAbertasTable'
import CobrancasUnicasTable from '../../../Components/user/Financeiro/Cobranca/CobrancasUnicasTable'

export default function Cobranca() {
  const [visibleModal, setVisibleModal] = useState(false);
  const showModal = () => { setVisibleModal(true); }
  const showOkModal = () => { setVisibleModal(false); }
  const showCloseModal = () => { setVisibleModal(false); }
  const [cobrancaUnica, setCobrancaUnica] = useState(true);
  const optionsWithDisabled = [
    { label: 'COBRANÇAS ÚNICAS', value: true },
    { label: 'COBRANÇAS ABERTAS', value: false },
  ];
  
  return(
    <>
    <HeaderUser  />
    <Row className={styled.Row}>
      <Row style={{width:'100%',justifyContent:'flex-end'}}>
          <Button type="primary" className={styled.Button}
            onClick={showModal}>
            GERAR COBRANÇA
          </Button>
        <Modal visible={visibleModal} title="Dados da Conta"
          onCancel={showCloseModal} width={1024}
          footer={[
            <Button key="submit" type="primary" onClick={showCloseModal} className={styled.ButtonCancelar}>
              CANCELAR
            </Button>,
            <Button key="submit" type="primary" onClick={showOkModal}
              className={styled.Button}>
              GERAR COBRANÇA
            </Button>]} >
          <Form.Item rules={[{ colon: false, required: true }]}>
            <CobrancaModal />
          </Form.Item>
        </Modal>
      </Row>
      <Row style={{width:'100%', justifyContent:'initial'}}>
        <Radio.Group  options={optionsWithDisabled}
          onChange={(e) => setCobrancaUnica(e.target.value)} 
          value={cobrancaUnica} optionType="button" 
          style={{ borderRadius: '2rem' }} buttonStyle="solid" />
      </Row>
      
      <Row>
      {cobrancaUnica ?
        <CobrancasUnicasTable />
        :
        <CobrancasAbertasTable />
      }
      </Row>
    </Row>
  </>
  );
};