import { Col, Input, Row, Form, DatePicker } from "antd";
import { useState } from "react";
import styled from '../../../styles/Transferencia.module.css'

export default function FormFinanceiro() {
  const [numCard, setNumCard] = useState();
  const [validadeCard, setValidadeCard] = useState();
  const [cvv, setCvv] = useState();
  return(
    <>
    <Row gutter={[24,24]}>
      <Col className={styled.Col}>
        <Form.Item label="Número do Cartão" style={{width:'80%'}}>
          <Input placeholder='Número do Cartão' value={numCard} onChange={(e) => setNumCard(e.target.value)}/>  
        </Form.Item>
      </Col>
      <Col className={styled.Col}>
      <Input.Group compact={true}>
          <Form.Item label="Validade do Cartão" style={{marginRight:'2rem'}}>
            <DatePicker  placeholder='Validade do Cartão' 
              format='MM/YYYY' picker="month" value={validadeCard}
              onChange={(date) => setValidadeCard(date)} />  
          </Form.Item>
          <Form.Item label="CVV" >
            <Input placeholder='cvv:' maxLength={4} value={cvv} onChange={(e) => setCvv(e.target.value)} />  
          </Form.Item>
          </Input.Group>
      </Col>
  </Row>
    </>
  )
};
