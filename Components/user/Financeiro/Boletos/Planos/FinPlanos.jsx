//CSS
import { Row, Col, Modal, Button, Form, Input } from "antd";
import styled from '../../../../../styles/Transferencia.module.css';

//Components
import { useState } from "react";
import PlanosTable from './PlanosTable'

export default function FinPlanos() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');

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
              ADICIONAR PLANO
            </Button>
          </Col>
          <Modal visible={visibleModal} title="Plano"
            onCancel={showCloseModal}
            footer={[
              <Button key="submit" type="primary" onClick={showCloseModal} className={styled.ButtonCancelar}>
                CANCELAR
              </Button>,
              <Button key="submit" type="primary" onClick={showOkModal}
                className={styled.Button}>
                ADICIONAR
              </Button>]} >
            <Form layout='vertical' >
              <Form.Item rules={[{ colon: false, required: true }]}
                label='Nome'>
                  <Input id='nome' type='name' size='large'
                    placeholder='Nome:' value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    style={{marginBottom:'1rem'}}
                  />
                </Form.Item>
                <Form.Item rules={[{ colon: false, required: true }]}
                label='Valor'>
                  <Input id='valor' type='name' size='large'
                    placeholder='Valor:' value={valor}
                    onChange={(e) => setValor(e.target.value)}
                  />
                </Form.Item>
            </Form>
          </Modal>
        </Row>
        <Row style={{ width: '55rem'}}>
          <h2>Listagem de Planos</h2>
          <PlanosTable />
        </Row>
      </Row>
    </>
  );
};
