import { useEffect, useState } from "react";
import { Input, Form, Row } from 'antd';
import ModalBancario from "./ModalBancario";

export default function PixModalSelect({value}) {
  const [visibleModal, setVisibleModal] = useState(false)
  const [visibleChaveAleatorio, setVisibleChaveAleatorio] =
    useState(false);
  const [visibleChaveCelular, setVisibleChaveCelular] =useState(false);
  const [visibleChaveEmail, setVisibleChaveEmail] = useState(false);
  const [visibleChaveBancario, setVisibleChaveBancario] =
    useState(false);
  const [visibleChaveCPFCNPJ, setVisibleChaveCPFCNPJ] =
    useState(false);      
  useEffect(() => {
    if(value === 'chaveAleatoria'){
      setVisibleModal(false);
      setVisibleChaveAleatorio(true);
      setVisibleChaveCelular(false);
      setVisibleChaveEmail(false);
      setVisibleChaveBancario(false);
      setVisibleChaveCPFCNPJ(false);
    }else if(value === 'chaveCelular'){
      setVisibleModal(false);
      setVisibleChaveAleatorio(false);
      setVisibleChaveCelular(true);
      setVisibleChaveEmail(false);
      setVisibleChaveBancario(false);
      setVisibleChaveCPFCNPJ(false);
    }else if(value === 'chaveEmail'){ 
      setVisibleModal(false);
      setVisibleChaveAleatorio(false);
      setVisibleChaveCelular(false);
      setVisibleChaveEmail(true);
      setVisibleChaveBancario(false);
      setVisibleChaveCPFCNPJ(false);
    }else if(value === 'dadosBancario'){ 
      setVisibleModal(false);
      setVisibleChaveAleatorio(false);
      setVisibleChaveCelular(false);
      setVisibleChaveEmail(false);
      setVisibleChaveBancario(true);
      setVisibleChaveCPFCNPJ(false);
    }else if(value === 'chaveCPFCNPJ'){
      setVisibleModal(false);
      setVisibleChaveAleatorio(false);
      setVisibleChaveCelular(false);
      setVisibleChaveEmail(false);
      setVisibleChaveBancario(false);
      setVisibleChaveCPFCNPJ(true);
    }else { 
      setVisibleModal(true);
      setVisibleChaveAleatorio(false);
      setVisibleChaveCelular(false);
      setVisibleChaveEmail(false);
      setVisibleChaveBancario(false);
      setVisibleChaveCPFCNPJ(false); }
  }, [value])
  
  return(
    <Row>
    {visibleModal ? null : 
    <>
    {visibleChaveAleatorio &&
      <>
        <Form.Item
            name="ChaveAleatoria" colon={false} required
            label="Chave Aleatória"
          >
          <Input placeholder="Coloque aqui o código de quem irá receber!" style={{width:'58rem', borderRadius:'2rem'}}/> 
        </Form.Item> 
      </>}
    {visibleChaveCelular &&
       <>
       <Form.Item
           name="ChaveCelular" colon={false} required
           label="Chave Celular"
         >
         <Input placeholder="Coloque aqui o celular com DDD de quem irá receber, EX:62984586073" style={{width:'58rem', borderRadius:'2rem'}} /> 
       </Form.Item>
     </>}
    {visibleChaveEmail &&
      <>
        <Form.Item
          name="ChaveEmail" colon={false} required
          label="Chave Email"
        >
          <Input placeholder="Coloque aqui o email de quem irá receber, EX:pix@kfbank2.com" style={{width:'58rem', borderRadius:'2rem'}} /> 
        </Form.Item>
      </>}
    {visibleChaveBancario &&
      <ModalBancario visibleModal={true}/>}
    {visibleChaveCPFCNPJ &&
      <>
      <Form.Item
        name="ChaveCPFCNPJ" colon={false} required
        label="Chave CPF/CNPJ"
      >
        <Input placeholder="Coloque aqui o CPF/CNPJ de quem irá receber." style={{width:'58rem', borderRadius:'2rem'}} /> 
      </Form.Item>
    </>}
  </>}
  </Row>
  );
};
