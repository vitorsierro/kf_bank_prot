//CSS
import { Row, Col, Modal, Button, Form } from "antd";
import styled from '../../../../styles/Transferencia.module.css';

//Components
import { useState } from "react";
import ContasFavorecidasTable from '../../../../Components/user/Financeiro/Pagamentos/ContasFavorecidas/ContasFavorecidasTable';
import ContasFavorecidasModal from '../../../../Components/user/Financeiro/Pagamentos/ContasFavorecidas/ContasFavorecidasModal';
import HeaderUser from '../../../../Components/user/HeaderUser';

export default function ContasFavorecidas() {
  const [visibleModal, setVisibleModal] = useState(false);
  const showModal = () => { setVisibleModal(true); }
  const showOkModal = () => { setVisibleModal(false); }
  const showCloseModal = () => { setVisibleModal(false); }
  
  return(
    <>
    <HeaderUser  />
    <Row className={styled.Row}>
      <Row style={{marginLeft:'auto'}}>
        <Col className={styled.Col}>
          <Button type="primary" className={styled.Button}
            onClick={showModal}>
            ADICIONAR CONTA BANCARIA
          </Button>
        </Col>
        <Modal visible={visibleModal} title="Dados da Conta"
          onCancel={showCloseModal} width={1024}
          footer={[
            <Button key="submit" type="primary" onClick={showCloseModal} className={styled.ButtonCancelar}>
              CANCELAR
            </Button>,
            <Button key="submit" type="primary" onClick={showOkModal}
              className={styled.Button}>
              SALVAR
            </Button>]} >
          <Form.Item rules={[{ colon: false, required: true }]}>
            <ContasFavorecidasModal />
          </Form.Item>
        </Modal>
      </Row>
      <Row style={{ width: '55rem'}}>
        <h2>Últimos Cadastros</h2>
        <ContasFavorecidasTable />
      </Row>
    </Row>
  </>
  );
};
