//CSS
import { Row, Col, Modal, Button, Form } from "antd";
import styled from '../../../../styles/Transferencia.module.css';

//Components
import { useState } from "react";
import TituloTable from '../../../../Components/user/Financeiro/Pagamentos/Titulos/TituloTable';
import TituloModal from '../../../../Components/user/Financeiro/Pagamentos/Titulos/TituloModal';
import HeaderUser from '../../../../Components/user/HeaderUser'
export default function Titulos() {
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
            ADICIONAR PAGAMENTOS
          </Button>
        </Col>
        <Modal visible={visibleModal} title="Dados do Título"
          onCancel={showCloseModal} width={1024}
          footer={[
            <Button key="submit" type="primary" onClick={showCloseModal} className={styled.ButtonCancelar}>
              CANCELAR
            </Button>,
            <Button key="submit" type="primary" onClick={showOkModal}
              className={styled.Button}>
              SOLICITAR PAGAMENTO
            </Button>]} >
          <Form.Item rules={[{ colon: false, required: true }]}>
            <TituloModal />
          </Form.Item>
        </Modal>
      </Row>
      <Row style={{ width: '55rem'}}>
        <h2>Últimos Títulos</h2>
        <TituloTable />
      </Row>
    </Row>
  </>
  );
};

