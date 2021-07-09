
import { Button, Row } from "antd";
import { useState } from "react";
import HeaderUser from '../Components/user/HeaderUser'
import ModalAjuda from "../Components/Ajuda/ModalAjuda";
import TableAjuda from "../Components/Ajuda/TableAjuda";
import styled from '../styles/Transferencia.module.css'
export default function Ajuda() {
  const [visible, setVisible] = useState(false);
  const showModal = () => {setVisible(true)}
  return(
    <>
    <HeaderUser />
    <Row>
    <Button type="primary" onClick={showModal}
      className={styled.Button}>
      ABRIR UM CHAMADO
    </Button>
    <TableAjuda />
    <ModalAjuda visible={visible}/>
    </Row>
    </>
  );
};
