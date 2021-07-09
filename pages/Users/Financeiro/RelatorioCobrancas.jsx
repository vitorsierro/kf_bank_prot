//CSS
import { Row } from 'antd';
import styled from '../../../styles/Transferencia.module.css';

//Components
import RelatorioCobrancasTable from '../../../Components/user/Financeiro/RelatorioCobrancasTable';
import HeaderUser from '../../../Components/user/HeaderUser/HeaderUser'

export default function RelatorioCobrancas() {
  return(
    <>
    <HeaderUser />
    <Row className={styled.Row} >
        <h2>Financeiro - Relatórico de Cobrança</h2>
        <RelatorioCobrancasTable />
    </Row>
    </>
  );
};
