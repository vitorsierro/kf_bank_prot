import { Table } from 'antd';
import styled from '../../../../styles/Transferencia.module.css';

export default function CobrancasAbertasTable() {
  const columns = [
    {
      title: 'Data da Cobrança',
      dataIndex: 'dataCobranca',
    },
    {
      title: 'Nome',
      dataIndex: 'nome',
    },
    {
      title: 'Opções de Pagamento',
      dataIndex: 'opcaoPagamento',
    },
    {
      title: 'Valor',
      dataIndex: 'Valor',
    },
    {
      title: 'Cobranças Únicas',
      dataIndex: 'cobrancasUnicas',
    },
    {
      title: 'Status',
      dataIndex: 'Status',
    },
    {
      title: 'Ação',
      dataIndex: 'acao',
    }
  ];
  const data = [
    {
      key: '1',
      dataCobranca:'dataCobranca',
      Nome:'nome',
      opcaoPagamento:'opcaoPagamento',
      valor:'valor',
      cobrancasUnicas:'cobrancasUnicas',
      Status:'Status',
      acao:'Ação'
    },
    {
      key: '2',
      dataCobranca:'dataCobranca',
      Nome:'nome',
      opcaoPagamento:'opcaoPagamento',
      valor:'valor',
      cobrancasUnicas:'cobrancasUnicas',
      Status:'Status',
      acao:'Ação'
    }
  ];
  
  function onChange(pagination) {
    console.log('params', pagination);
  }
  
  return(
    <Table columns={columns} dataSource={data} 
    pagination={{ pageSize:6 }}
    onChange={onChange} className={`${styled.TableBackground} ${styled.TablePix}`}
    style={{justifyContent:'unset', padding:'3rem 1rem !important', margin:'1rem 0rem !important'}} />
    )
};
