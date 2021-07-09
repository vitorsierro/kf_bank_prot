import { Button, Col, Row, Modal } from "antd";
import HeaderUser from "../../../Components/user/HeaderUser/HeaderUser";
import KFBankTable from "../../../Components/user/KFCard/KFBankTable";
import RecargaModal from "../../../Components/user/KFCard/RecargaModal";
import styled from '../../../styles/Transferencia.module.css'
import { useState } from "react";
import RecargaTable from "../../../Components/user/KFCard/RecargaTable";
export default function Recarga() {
  const [visibleModal, setVisibleModal] = useState(false);
  const showModalRecarga = () => { setVisibleModal(true) };
  const showCloseModalRecarga = () => { setVisibleModal(false) };

  return (
    <>
      <HeaderUser />
      <Row style={{
        justifyContent: 'flex-start',
        marginBottom: '2rem', marginLeft: '8rem'
      }} >
        <Col className={styled.Col}>
          <Button type="primary" onClick={showModalRecarga}
            className={styled.Button}>
            Recarga de Celular
          </Button>
          <Modal width={1024}
            visible={visibleModal}
            title="Dados da Recarga"
            onCancel={showCloseModalRecarga}
            footer={[
              <Button key="submit" type="primary" onClick={showCloseModalRecarga}>
                RECARREGAR
              </Button>]} >
            <RecargaModal />
          </Modal>
        </Col>
      </Row>
      <Row className={styled.Row}>
        <RecargaTable />
      </Row>
    </>
  );
};
