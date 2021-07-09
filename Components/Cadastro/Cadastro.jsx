//lib
import React from 'react';

//Components
import DadosPessoais from './DadosPessoais';
import DadosAddress from './DadosAddress';
import DadosUsuario from './DadosUsuario';

//CSS
import { Steps} from 'antd';
import { MinusCircleOutlined, CheckOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import styled from '../../styles/Login.module.css';

const { Step } = Steps

export default function Cadastro() {
  const [etapaAtual, setEtapaAtual] = React.useState(0);
  const [dadosColetados, setDados] = React.useState({});
  const etapas = ['finish', 'process', 'wait'];
  const iconsEtapas = [<CheckOutlined twoToneColor="#52c41a" />,
                       <LoadingOutlined twoToneColor="#52c41a" />,<MinusCircleOutlined twoToneColor="#52c41a" />]

  const formulario = [
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosAddress  aoEnviar={coletarDados} />, 
    <h3>Obrigado pelo Cadastro!</h3>,
  ];
  React.useEffect(() => {
    if (etapaAtual === formulario.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }

  function proximo() {
    if(etapaAtual === 0){
    
    }else if(etapaAtual === 1){
      
    }else if(etapaAtual === 2){
      
    }else{
    setEtapaAtual(etapaAtual + 1);
  }
  }
  return(
    <div className={styled.Cadastro}> 
      <Steps className={styled.Steps}>
        <Step status={etapas[etapaAtual]} title="Dados Pessoais" 
        icon={iconsEtapas[0]} />
        <Step status={etapas[etapaAtual]} title="Dados Address" 
        icon={iconsEtapas[1]} />
        <Step status={etapas[etapaAtual]} title="Dados Usuarios" 
        icon={iconsEtapas[2]} />
        <Step status={etapas[etapaAtual]} title="Done" 
        icon={<SmileOutlined />} />
      </Steps>
     <DadosUsuario />
    </div>
  );
};
