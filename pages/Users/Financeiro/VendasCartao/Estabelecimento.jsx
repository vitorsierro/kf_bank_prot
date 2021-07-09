import { Row, Col, Button,  Modal } from "antd";
import styled from '../../../../styles/Transferencia.module.css';
import HeaderUser from '../../../../Components/user/HeaderUser';
import { useState } from "react";
import ModalEstabelecimento from "../../../../Components/user/Financeiro/VendasCartao/Estabelecimento/ModalEstabelecimento";

export default function Estabelecimento() {
  const [visibleModal, setVisibleModal] = useState(false);
  
  const showModal = () => { setVisibleModal(true); }
  const showOkModal = () => { setVisibleModal(false); }
  const showCloseModal = () => { setVisibleModal(false); }
  
 return(
    <>
    <HeaderUser />
    <Row className={styled.Row} style={{justifyContent:'initial'}}>
      <Row gutter={[48,48]} style={{marginBottom:'2rem'}}>
        <Button className={styled.Button}  onClick={showModal}>
          ABRIR ESTABELECIMENTO
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
            <ModalEstabelecimento />
          </Modal>
      </Row>
      <Row gutter={[48,48]}>
        <h5 style={{color:'white', fontSize:'14px'}}>
        Abrir um estabelecimento para utilizar as opções de pagamento de cartão de crédito online, e ou solicitar sua maquininha. Para abrir um estabelecimento, clique no botão acima, após solicitar a abertura de estabelecimento, o registro aparecerá na listagem logo abaixo chamada de Meu Estabelecimento. Na listagem terá um botão na coluna Ação, chamado Opções, clique nele, terá uma opção Enviar Documentos, clique nele, informações de como enviar documentos para aprovação do seu estabelecimento aparecerá logo abaixo. Envie o máximo de documentos solicitados que você tiver, o processo de análise é rápida, mas a liberação do seu estabelecimento pode ocorrer nas próximas 24 horas, caso contrário, por favor, entre em contato com o nosso Suporte. Quando o status mostrar Habilitado, suas vendas já estão habilitadas para esse estabelecimento.</h5>
      </Row>
    </Row>
  </>
 );
};
