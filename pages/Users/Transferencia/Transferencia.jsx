import { Button, Col, Row,  Modal } from "antd";
import React from "react";
import HeaderUser from "../../../Components/user/HeaderUser/HeaderUser";
import FormTransferencia from "../../../Components/user/Transferencia/FormTransferencia";
import styled from '../../../styles/Transferencia.module.css'
import TransferenciaTable from "../../../Components/user/Transferencia/TransferenciaTable";

export default function Transferencia() {
  const [TransferenciaVisible, setTransferenciaVisible] = React.useState(false);

  const showModalTransferencia = () => {
    setTransferenciaVisible(true);
  }
  const showCloseModalTransferencia = () =>{
    setTransferenciaVisible(false);
  }

  return (
   <>
       <HeaderUser />
      <Row className={styled.Row}>
        <Col className={styled.Col}>
          <h3>SUA CARTEIRA PÚBLICA</h3>
          <h4>CHAVE</h4>
        </Col>
        <Col className={styled.Col}>
          <Button type="primary" onClick={showModalTransferencia}
            className={styled.Button}>
            Transferência em massa
          </Button>
          <Modal
            visible={TransferenciaVisible}
            title="Transferência em massa"
            onCancel={showCloseModalTransferencia}
            footer={[
              <Button key="submit" type="primary" onClick={showCloseModalTransferencia}>
                Importar
              </Button>,
              <Button key="submit" type="primary" onClick={showCloseModalTransferencia}>
                 Cancelar
              </Button> ]} >
          <FormTransferencia />
          </Modal>
        </Col>
      </Row>
      <Row>
       <TransferenciaTable />
      </Row>
    </>
);
}