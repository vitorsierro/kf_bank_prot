//CSS
import { Row, Col, Modal, Button, Form, Input } from "antd";
import styled from '../../../../../styles/Transferencia.module.css';

//Components
import { useState } from "react";
import GrupoTable from "../Grupos/GrupoTable";
import ModalCliente from "./ModalCliente";
import ClientesTable from "./ClientesTable";

export default function FinClientes() {
  const [visibleModal, setVisibleModal] = useState(false);
  const showModal = () => { setVisibleModal(true); }
  const showOkModal = () => { setVisibleModal(false); }
  const showCloseModal = () => { setVisibleModal(false); }
  
  return(
    <>
    <Row className={styled.Row}>
      <Row style={{marginLeft:'auto'}}>
        <Col className={styled.Col}>
          <Button type="primary" className={styled.Button}
            onClick={showModal}>
            ADICIONAR CLIENTES
          </Button>
        </Col>
        <Modal visible={visibleModal} title="Cliente"
          onCancel={showCloseModal} width={1024}
          footer={[
            <Button key="submit" type="primary" onClick={showCloseModal} className={styled.ButtonCancelar}>
              CANCELAR
            </Button>,
            <Button key="submit" type="primary" onClick={showOkModal}
              className={styled.Button}>
              ADICIONAR
            </Button>]} >
          <Form.Item rules={[{ colon: false, required: true }]}>
            <ModalCliente />
          </Form.Item>
        </Modal>
      </Row>
      <Row style={{ width: '55rem'}}>
        <h2>Listagem de Clientes</h2>
        <ClientesTable />
      </Row>
    </Row>
  </>
  );
};
