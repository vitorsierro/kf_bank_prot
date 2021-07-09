import Link from 'next/link';
import HeaderUser from '../../../../Components/user/HeaderUser';
import { Row, Col } from 'antd';
import styled from '../../../../styles/Transferencia.module.css';
export default function Recorrencia() {
  return(
    <>
      <HeaderUser />
      <Row gutter={[48,48]} className={styled.Row} 
        style={{padding:'1rem 1rem'}}>
        <Col>
          <h3>Para criar planos de recorrência, você precisa abrir seu estabelecimento,<Link href='https://www.google.com/'>clique aqui</Link> e abra agora mesmo, mas depois volte aqui para continuarmos!!!</h3>
        </Col>
      </Row>
    </>
  )
};
