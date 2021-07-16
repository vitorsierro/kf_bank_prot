//Components
import { useState } from 'react';
import FormEndereco from '../FormularioComDados/DadosEndereco/FormEndereco';
//Icons
import { PlusOutlined } from '@ant-design/icons';
//CSS
import styled from '../../styles/Transferencia.module.css'
import {Row, Col, Form, Select, Input, Upload, Modal, Button} from 'antd';



const { Option } = Select;
const fileList = [
  {
    uid: '1', name: 'rg_frente.png', status: 'done'
  },
  {
    uid: '2', name: 'rg_verso.png', status: 'done'
  },
  {
    uid: '3', name: 'fotoRepresentante.png', status: 'done'
  },
  {
    uid: '4', name: 'SelfieDocumento.png', status: 'done'
  },
  {
    uid: '5', name: 'fotoRepresentante.png', status: 'done'
  },
  {
    uid: '6', name: 'comprovanteEndereço.pdf', status: 'done'
  },
  {
    uid: '7', name: 'documentosComplementares.pdf', status: 'done'
  }
];
const uploadButton = (
  <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>Upload</div>
  </div>
);

export default function DadosUsuario({ aoEnviar, tipo }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPasswrod, setRepeatPasswrod] = useState('');
  const [pin, setPin] = useState('');
  
  function handleSubmit (event){
    event.preventDefault()
    aoEnviar({ login, password, repeatPasswrod, pin})
  }
  
  return(
    <>
    <Form layout='vertical'>
    <Row gutter={[48,48]}>
      <h2>Documentos</h2>
      <Row gutter={[48,48]}>
        <Col span={6}>
          <h3>Foto do Representante</h3>
          <h4>Você deve tirar uma foto do seu rosto, semelhante a uma foto 3X4, retire os óculos ou qualquer acessório que atrapalhe na identificação com a foto que está no documento RG ou CNH que esteja nos enviando. A foto deve estar legível.</h4>
        </Col>
        <Col span={6}>
          <h3>Selfie com Documento</h3>
          <h4>Uma foto legível segurando a frente do documento.</h4>
        </Col>
        <Col span={6}>
          <h3>Frente do Documento</h3>
          <h4>A foto deve estar legível.</h4>
        </Col>
        <Col span={6}>
          <h3>Verso do Documento</h3>
          <h4>A foto deve estar legível.</h4>
        </Col>
      </Row>
      <Row gutter={[48,48]}>
        <Col>
          <h3>Comprovante de Endereço</h3>
          <h4>Aceito conta de gás, água, luz ou telefone no nome do titular ou dos pais conforme documento pessoal, foto legível da parte descritiva da conta e de até 3 meses da data atual. Aceitamos também no nome do cônjuge com apresentação da certidão de casamento (se for este o caso, enviar certidão de casamento no campo abaixo Documentos Complementares). Aceitamos também declaração de aluguel assinada pelo dono do imóvel com firma reconhecida (se for este o caso, enviar declaração no campo abaixo Documentos Complementares). Não aceitamos foto de envelopes ou outras contas e formatos. O arquivo não pode ser maior que 10 mb.</h4>
        </Col>
        <Col>
          <h3>Documentos Complementares</h3>
          <h4>Certidão de casamento, declaração de aluguel, etc. O arquivo pode estar compactado, não deve ser maior que 10 mb.</h4>
        </Col>
      </Row>
      <Row gutter={[48,48]}>
      <Col>
      <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture-card"
      defaultFileList={[...fileList]}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      </Col>
    </Row>
    <Row gutter={[48,48]}>
      <Col className={styled.Col}>
        <Form.Item label="Usuário">
          <Input placeholder='Usuário:' value={login} 
            onChange={(e) => setLogin(e.target.value)} />  
        </Form.Item>
      </Col>   
      <Input.Group compact={true}>
      <Col className={styled.Col}>
        <Form.Item label="Senha:"
          help='A senha deve ser numérica, de seis números!'>
          <Input placeholder='Senha:' value={password} 
            onChange={(e) => setPassword(e.target.value)} />  
        </Form.Item>
      </Col>
      <Col className={styled.Col}>
        <Form.Item label="Redigite a senha:">
          <Input placeholder='Redigite a senha:' 
            value={repeatPasswrod} 
            onChange={(e) => setRepeatPasswrod(e.target.value)} />  
        </Form.Item>
      </Col>
      </Input.Group>
    </Row>
    <Row style={{marginTop:'2rem'}}>
      <Button type="submit" className={styled.ButtonCancelar}>       
        Anterior
      </Button>
      {console.log(tipo)}
      {tipo !== 'editar' ?
      <Button type="submit" className={styled.Button} 
        style={{marginLeft:'30rem'}}
        onClick={(event) => handleSubmit(event)}>
          Concluir
      </Button>
      :
      <Button type="submit" className={styled.Button} 
        style={{marginLeft:'30rem'}}
        onClick={(event) => handleSubmit(event)}>
          Atualizado
      </Button>
      }
    </Row>
  </Row>
  </Form>
  </>
  )
};
