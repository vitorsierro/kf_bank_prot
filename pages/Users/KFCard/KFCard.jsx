import { Button, Col, Row,  Modal } from "antd";
import { useState } from "react";
import HeaderUser from "../../../Components/user/HeaderUser/HeaderUser";
import AddCardModal from "../../../Components/user/KFCard/AddCardModal";
import KFBankTable from "../../../Components/user/KFCard/KFBankTable.jsx";
import ReqCardModal from "../../../Components/user/KFCard/ReqCardModal";

import styled from '../../../styles/Transferencia.module.css'

export default function KFCard() {
  const [ visibleModalRequest, setVisibleModalRequest ] =
   useState(false)
  const [ visibleAddCard, setVisibleAddCard ] = useState(false);
  
  const showModalRequest = () => {setVisibleModalRequest(true)}
  const showCloseModalRequest = () => { setVisibleModalRequest(false)}
  const showModalAdd = () => { setVisibleAddCard(true) }
  const showCloseModalAdd = () => { setVisibleAddCard(false) }
  return(
    <>
    <HeaderUser />
    <Row className={styled.Row}>
      <Col className={styled.Col}>
          <Button type="primary" onClick={showModalRequest}
            className={styled.Button}>
           SOLICITAR CARTÃO
          </Button>
          <Modal width={1024}
            visible={visibleModalRequest}
            title="Dados da Solicitação"
            onCancel={showCloseModalRequest}
            footer={[
              <Button key="submit" type="primary" onClick={showCloseModalRequest}>
                CANCELAR
              </Button>,
              <Button key="submit" type="primary" onClick={showCloseModalRequest}>
                 SOLICITAR
              </Button> ]} >
                <AddCardModal />
                <h5>Tarifa para confecção do cartão R$ 59,90</h5>
          </Modal>
        </Col>
        <Col className={styled.Col}>
          <Button type="primary" onClick={showModalAdd}
            className={styled.Button}>
            ADICIONAR CARTÃO AVULSO
          </Button>
          <Modal width={1024}
            visible={visibleAddCard}
            title="Dados da Adesão"
            onCancel={showCloseModalAdd}
            footer={[
              <Button key="submit" type="primary" onClick={showCloseModalAdd}>
                CANCELAR
              </Button>,
              <Button key="submit" type="primary" onClick={showCloseModalAdd}>
                 ADICIONAR
              </Button> ]} >
                <ReqCardModal />
          </Modal>
        </Col>
      </Row>
      <Row className={styled.Row}>
        <KFBankTable />
      </Row>
    </>
  );
};
