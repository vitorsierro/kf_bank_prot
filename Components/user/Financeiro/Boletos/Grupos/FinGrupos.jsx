//CSS
import { Row, Col, Modal, Button, Form, Input } from "antd";
import styled from '../../../../../styles/Transferencia.module.css';

//Components
import { useState } from "react";
import GrupoTable from "./GrupoTable";

export default function FinGrupos() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [nome, setNome] = useState('');

  const showModal = () => { setVisibleModal(true); }
  const showOkModal = () => { setVisibleModal(false); }
  const showCloseModal = () => { setVisibleModal(false); }

  return (
    <>
      <Row className={styled.Row}>
        <Row style={{marginLeft:'auto'}}>
          <Col className={styled.Col}>
            <Button type="primary" className={styled.Button}
              onClick={showModal}>
              ADICIONAR GRUPO
            </Button>
          </Col>
          <Modal visible={visibleModal} title="Grupo"
            onCancel={showCloseModal}
            footer={[
              <Button key="submit" type="primary" onClick={showCloseModal} className={styled.ButtonCancelar}>
                CANCELAR
              </Button>,
              <Button key="submit" type="primary" onClick={showOkModal}
                className={styled.Button}>
                ADICIONAR
              </Button>]} >
            <Form.Item rules={[{ colon: false, required: true }]}>
              <Input id='nome' type='name' size='large'
                placeholder='Nome:' value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Form.Item>
          </Modal>
        </Row>
        <Row style={{ width: '55rem'}}>
          <h2>Listagem de Grupo</h2>
          <GrupoTable />
        </Row>
      </Row>
    </>
  );
};
