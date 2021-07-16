import { Button, Row, Modal } from "antd";
import React from "react";
import HeaderUser from "../../../Components/user/HeaderUser/HeaderUser";
import PixChaveCobranca from "../../../Components/user/Pix/PixChaveCobranca";
import PixDepositoTable from "../../../Components/user/Pix/PixDepositoTable";
import styled from '../../../styles/Transferencia.module.css'
import PixCobrancaModal from "../../../Components/user/Pix/PixCobrancaModal";

export default function Cobranca() {
  const [TransferenciaVisible, setTransferenciaVisible] = React.useState(false);

  const showModalTransferencia = () => {
    setTransferenciaVisible(true);
  }
  const showCloseModalTransferencia = () => {
    setTransferenciaVisible(false);
  }

  return (
    <>
      <HeaderUser />
      <Row className={styled.Row}>
        <Button type="primary" onClick={showModalTransferencia}
          className={styled.Button} style={{marginBottom:'2rem'}}>
            GERAR CHAVE PIX DE COBRANÇA
        </Button>
        <Modal
          visible={TransferenciaVisible}
          title="Dados da chave"
          onCancel={showCloseModalTransferencia}
          footer={[
            <Button key="submit" type="primary" onClick={showCloseModalTransferencia}>
              Gerar
                </Button>,
            <Button key="submit" type="primary" onClick={showCloseModalTransferencia}>
              Cancelar
                </Button>]} >
          <PixCobrancaModal />
        </Modal>
      </Row>
      <Row className={styled.Row} style={{padding:'3rem 0rem'}}>
        <h2>Últimas  Transferências</h2>
        <PixDepositoTable />
      </Row>
      <Row className={styled.Row} style={{padding:'3rem 0rem'}}>
      <h2>Chaves de Cobrança</h2>
        <PixChaveCobranca />
      </Row>
    </>
  );
};
