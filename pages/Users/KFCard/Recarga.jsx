//CSS
import { Button, Row, Modal } from "antd";
import styled from '../../../styles/Transferencia.module.css';

//Components
import { useState } from "react";
import HeaderUser from "../../../Components/user/HeaderUser/HeaderUser";
import RecargaModal from "../../../Components/user/KFCard/RecargaModal";
import RecargaTable from "../../../Components/user/KFCard/RecargaTable";

export default function Recarga() {
  const [visibleModal, setVisibleModal] = useState(false);
  const showModalRecarga = () => { setVisibleModal(true) };
  const showCloseModalRecarga = () => { setVisibleModal(false) };

  return (
    <>
      <HeaderUser />
        <Row className={styled.Row}>
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
        </Row>
      <Row className={styled.Row}>
        <RecargaTable />
      </Row>
    </>
  );
};
