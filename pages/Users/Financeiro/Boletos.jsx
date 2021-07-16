//CSS
import { Row, Col, Form, Input, Button } from "antd";
import styled from '../../../styles/Transferencia.module.css';

//Components
import { useState } from "react";
import HeaderUser from '../../../Components/user/HeaderUser';
import FinBoletos from "../../../Components/user/Financeiro/Boletos/Boletos/FinBoletos";
import FinGerar from "../../../Components/user/Financeiro/Boletos/Gerar/FinGerar";
import FinImportar from "../../../Components/user/Financeiro/Boletos/Importar/FinImportar";
import FinGrupos from "../../../Components/user/Financeiro/Boletos/Grupos/FinGrupos";
import FinPlanos from "../../../Components/user/Financeiro/Boletos/Planos/FinPlanos";
import FinClientes from "../../../Components/user/Financeiro/Boletos/Clientes/FinClientes";


export default function Boletos() {
  const [isBoleto, setIsBoleto] = useState(true);
  const [isGerar, setIsGerar] = useState(false);
  const [isImportar, setIsImportar] = useState(false);
  const [isGrupos, setIsGrupos] = useState(false);
  const [isClientes, setIsClientes] = useState(false);
  const [isPlanos, setIsPlanos] = useState(false);
  
  const handleBoleto = () => { setIsBoleto(true); setIsGerar(false);
    setIsImportar(false); setIsGrupos(false); setIsClientes(false);
    setIsPlanos(false) }
  const handleGerar = () => { setIsBoleto(false); setIsGerar(true);
    setIsImportar(false); setIsGrupos(false); setIsClientes(false);
    setIsPlanos(false) }
  const handleImportar = () => { setIsBoleto(false); setIsGerar(false);
    setIsImportar(true); setIsGrupos(false); setIsClientes(false);
    setIsPlanos(false) }
  const handleGrupos = () => { setIsBoleto(false); setIsGerar(false);
    setIsImportar(false); setIsGrupos(true); setIsClientes(false);
    setIsPlanos(false) }
  const handleClientes = () => { setIsBoleto(false); setIsGerar(false);
    setIsImportar(false); setIsGrupos(false); setIsClientes(true);
    setIsPlanos(false) }
  const handlePlanos = () => { setIsBoleto(false); setIsGerar(false);
    setIsImportar(false); setIsGrupos(false); setIsClientes(false);
    setIsPlanos(true) }  
  return(
    <>
      <HeaderUser />
      <Row className={styled.Row}>
      <Button className={`${styled.Button} ${styled.ButtonNotRadius}`} 
      onClick={() => handleBoleto()}
      >
      BOLETOS
      </Button>
      <Button className={`${styled.Button} ${styled.ButtonNotRadius}`} 
      onClick={() => handleGerar()}
      >
      GERAR
      </Button>
      <Button className={`${styled.Button} ${styled.ButtonNotRadius}`} 
        onClick={() => handleImportar()}
      >
      IMPORTAR
      </Button>
      <Button className={`${styled.Button} ${styled.ButtonNotRadius}`} 
      onClick={() => handleGrupos()}
      >
      GRUPOS
      </Button>
      <Button className={`${styled.Button} ${styled.ButtonNotRadius}`} 
      onClick={() => handleClientes()}
      >
      CLIENTES
      </Button>
      <Button className={`${styled.Button} ${styled.ButtonNotRadius}`} 
        onClick={() => handlePlanos()}
      >
      PLANOS
      </Button>
    </Row>
    <Row >
      {isBoleto && <FinBoletos />}
      {isGerar &&  <FinGerar />}
      {isImportar && <FinImportar />}
      {isGrupos && <FinGrupos />}
      {isClientes && <FinClientes />}
      {isPlanos && <FinPlanos />} 
    </Row>
    </>
  );
};
