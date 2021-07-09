//Lib
import Link from 'next/link';
import Image from 'next/image';
//CSS
import {Row, Col} from 'antd';
import styled from '../../styles/Footer.module.css'
//Image
import logo from '../../public/img/logo_alterado.png';
import iconFacebook from '../../public/img/icone_facebook.png';
import iconInstagram from '../../public/img/icone_instagram.png';

export default function Footer() {
  return(
    <>
    <Row>
      <Col className={styled.Col}>
      <div className={styled.Logo}/>
      </Col>
      <Col className={styled.Col}>
      <Row>
      <div className={styled.FooterFacebook} />
      <div className={styled.FooterInstragram} />
      </Row>
      <Link href="mailto:contato@kfbank2.com"><h3 className={styled.Link}>contato@kfbank2.com</h3></Link>
      <Link href="mailto:contato@kfbank2.com"><h3>Trabalhe Conosco</h3></Link>
      </Col>
      <Col className={styled.ColFinal}>
        <h2>Fale com a gente</h2>
        <h5>Atendimento</h5>
        <Link href="tel:08000420667"><h3 style={{width:'38%'}}>0800 04 20 667</h3></Link>
        <p>8h às 24h - De Segunda a Sexta, Exceto Feriados</p>
      </Col>
    </Row>
    <footer className={styled.Footer}>Todos os direitos reservados a KF Bank © 2021</footer>
    </>
  );
};
