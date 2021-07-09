import Image from 'next/image';
import  {Row, Col, Input}  from  'antd'
import styled from '../../../styles/Transferencia.module.css'

import HeaderUser from '../../../Components/user/HeaderUser/HeaderUser';
import qrcodepix from '../../../public/img/boleto.png';
import PixDepositoTable from '../../../Components/user/Pix/PixDepositoTable';

const { TextArea } = Input;

export default function Deposito() {
  
  return(
    <>
    <HeaderUser />
    <Row className={styled.Row}>
    <Col className={styled.Col}>
    <h3>SUA CHAVE PIX</h3>
    <Image src={qrcodepix}  quality={100} width={100} height={100} /> 
    </Col>
    <Col className={styled.Col}> 
    <h3>PIX COPIA E COLA</h3>
    <TextArea rows={4} />
    <h5>Valor da tarifa a ser cobrada por  recebimento pix
        por recebimento, quando é mesmo titular <i>R$  1,00</i> por recebimento, quando é de terceiro: <i>R$ 1,00</i>
    </h5>   
    </Col>
    </Row>
    <Row>
      <PixDepositoTable />
    </Row>
    </>
  );
};
