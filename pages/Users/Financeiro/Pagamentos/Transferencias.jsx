//CSS
import { Button, Col, Row,  Modal, Form, Radio, Input } from "antd";
import styled from '../../../../styles/Transferencia.module.css';
//Components
import React, { useEffect, useState } from "react";
import HeaderUser from "../../../../Components/user/HeaderUser/HeaderUser";
import FormTransferencia from "../../../../Components/user/Transferencia/FormTransferencia";
import TransferenciaTable from "../../../../Components/user/Financeiro/Pagamentos/Transferencias/TransferenciasTable";



export default function Transferencias() {
  const [TransferenciaVisible, setTransferenciaVisible] 
    = useState(false);
  const [TransferenciaVisibleMassa, setTransferenciaVisibleMassa] 
    = useState(false);
  const [isDocumento, setIsDocumento] = useState(true);
  const [documento, setDocumento] = useState('');
  const [titular, setTitular] = useState('');

  const showModalTransferencia = () => {
    setTransferenciaVisible(true);
  }
  const showCloseModalTransferencia = () =>{
    setTransferenciaVisible(false);
  }
  const showModalTransferenciaMassa = () => {
    setTransferenciaVisibleMassa(true);
  }
  const showCloseModalTransferenciaMassa = () =>{
    setTransferenciaVisibleMassa(false);
  }
  const optionsWithDisabled = [
    { label: 'Buscar por Documento', value: true },
    { label: 'Buscar por Titular', value: false },
  ];
  
  return (
   <>
    <HeaderUser />
    <Row className={styled.Row} 
      style={{justifyContent:'space-between'}}>
      <Col>
        <Button type="primary" onClick={showModalTransferenciaMassa}
          className={styled.Button}>
          Transferência em massa
        </Button>
        <Modal visible={TransferenciaVisibleMassa}
          title="Transferência em massa"
          onCancel={showCloseModalTransferenciaMassa}
          footer={[
            <Button key="submit" type="primary" 
              onClick={showCloseModalTransferenciaMassa} 
              className={styled.ButtonCancelar}>
                Cancelar
            </Button>,
            <Button key="submit" type="primary" 
              onClick={showCloseModalTransferenciaMassa} 
              className={styled.Button}>
                Importar
            </Button>
            ]}>
        <FormTransferencia />
        </Modal>
      </Col>
      <Col style={{marginLeft:'auto'}}>
        <Button type="primary" onClick={showModalTransferencia}
          className={styled.Button}>
          Transferências
        </Button>
        <Modal
          visible={TransferenciaVisible}
          title="Transferências"
          onCancel={showCloseModalTransferencia}
          footer={[
            <Button key="submit" type="primary" 
              onClick={showCloseModalTransferencia} 
              className={styled.ButtonCancelar}>
                Cancelar
            </Button>,
            <Button key="submit" type="primary" 
              onClick={showCloseModalTransferencia} 
              className={styled.Button}>
                Importar
            </Button>
            ]} >
          <Form layout='vertical'>
            <Form.Item rules={[{ colon: false, required: true }]}>
              <Radio.Group  options={optionsWithDisabled}
                onChange={(e) => setIsDocumento(e.target.value)} 
                value={isDocumento} optionType="button" buttonStyle="solid" />
            </Form.Item>
            <Row>
              { isDocumento === true ? 
                <Input id='documento' type='name' size='large'
                  placeholder='Documento:' value={documento}
                  onChange={(e) => setDocumento(e.target.value)}
                />
              :
                <Input id='titular' type='name' size='large'
                  placeholder='Titular:' value={titular}
                  onChange={(e) => setTitular(e.target.value)}
                />
              }
            </Row>
          </Form>
        </Modal>
      </Col>
    </Row>
    <Row>
      <TransferenciaTable />
    </Row>
  </>
  );
};
