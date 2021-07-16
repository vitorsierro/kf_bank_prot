//lib
import React, { useEffect } from 'react';

//Components
import DadosPessoais from '../Components/Cadastro/DadosPessoais';
import DadosAddress from '../Components/Cadastro/DadosAddress';
import DadosUsuario from '../Components/Cadastro/DadosUsuario';

//CSS
import { Steps} from 'antd';
import { MinusCircleOutlined, CheckOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import styled from '../styles/Login.module.css';
import { useRouter } from 'next/router';

const { Step } = Steps

export default function Cadastro() {
  let icon = [1,2,2];
  const router = useRouter()
  const [etapaAtual, setEtapaAtual] = React.useState(0);
  const [dadosColetados, setDados] = React.useState({});
  const etapas = ['finish', 'process', 'wait'];
  const iconsEtapas = [<CheckOutlined twoToneColor="#52c41a" />,
                       <LoadingOutlined twoToneColor="#52c41a" />,<MinusCircleOutlined twoToneColor="#52c41a" />,
                       <SmileOutlined twoToneColor="#52c41a" />]

  const formulario = [
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosAddress  aoEnviar={coletarDados} />,
    <DadosUsuario  aoEnviar={coletarDados} tipo={'editar'} />,
    <h3>Obrigado pelo Cadastro!</h3>,
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
    console.log(dados)
  }
  
  function proximo() {
    setEtapaAtual(etapaAtual + 1);
    if(etapaAtual === 1){
      icon = [0,1,2]
    }else if(etapaAtual === 2){
      icon = [0,0,1]
    }else{
      router.push('/Users')
    }  
  }
 
  return(
  <div className={styled.Container}>
    <div className={styled.Cadastro}> 
      <Steps className={styled.Steps}>
        <Step status={etapas[etapaAtual]} title="Dados Pessoais" 
        icon={iconsEtapas[icon[0]]} />
        <Step status={etapas[etapaAtual]} title="Dados Address" 
        icon={iconsEtapas[icon[1]]} />
        <Step status={etapas[etapaAtual]} title="Dados Usuarios" 
        icon={iconsEtapas[icon[2]]} />
        <Step status={etapas[etapaAtual]} title="Done" 
        icon={<SmileOutlined />} />
      </Steps>
      {formulario[etapaAtual]}
    </div>
  </div>
  );
};