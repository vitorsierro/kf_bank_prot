import { Button, Row,Modal } from "antd";
import styled from '../../../../styles/Transferencia.module.css'
//Components
import { useState } from "react";
import HeaderUser from '../../../../Components/user/HeaderUser'
import UsuariosModal from '../../../../Components/user/Colaboradores/Usuarios/UsuariosModal'
import UsuariosTable from '../../../../Components/user/Colaboradores/Usuarios/UsuariosTable'

export default function Usuarios() {
  const [visibleModal, setVisibleModal] = useState(false);

  const showModal = () => { setVisibleModal(true); }
  const showOkModal = () => { setVisibleModal(false); }
  const showCloseModal = () => { setVisibleModal(false); }

  return (
    <>
      <HeaderUser />
      <Row className={styled.Row} style={{ justifyContent: 'initial' }}>
        <Button className={styled.Button} onClick={showModal}>
          ADICIONAR USUÁRIOS
        </Button>
        <Modal visible={visibleModal} title="DADOS DO ESTABELECIMENTO"
          onCancel={showCloseModal} width={1024}
          footer={[
            <Button key="submit" type="primary" onClick={showCloseModal} className={styled.ButtonCancelar}>
              CANCELAR
            </Button>,
            <Button key="submit" type="primary" onClick={showOkModal}
              className={styled.Button}>
              SOLICITAR
            </Button>]}
        >
          <UsuariosModal />
        </Modal>
      </Row>
      <Row className={styled.Row}>
        <UsuariosTable />
      </Row>
    </>
  );
};