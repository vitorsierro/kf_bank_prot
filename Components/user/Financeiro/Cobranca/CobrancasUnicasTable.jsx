import { Table } from 'antd';
import styled from '../../../../styles/Transferencia.module.css';

export default function CobrancasUnicasTable() {
  const columns = [
    {
      title: 'Data da Cobrança',
      dataIndex: 'dataCobranca',
    },
    {
      title: 'Descrição',
      dataIndex: 'descricao',
    },
    {
      title: 'Email',
      dataIndex: 'Email',
    },
    {
      title: 'Opções de Pagamento',
      dataIndex: 'opcaoPagamento',
    },
    {
      title: 'Valor Cobrado',
      dataIndex: 'valorCobrado',
    },
    {
      title: 'Valor Recebido',
      dataIndex: 'valorRecebido',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Data do Pagamento',
      dataIndex: 'dataPagamento',
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
      descricao:'descricao',
      email:'email',
      opcaoPagamento:'opcaoPagamento',
      valorCobrado:'valorCobrado',
      valorRecebido:'valorRecebido',
      status:'status',
      dataPagamento:'dataPagamento',
      acao:'Ação'
    },
    {
      key: '2',
      dataCobranca:'dataCobranca',
      descricao:'descricao',
      email:'email',
      opcaoPagamento:'opcaoPagamento',
      valorCobrado:'valorCobrado',
      valorRecebido:'valorRecebido',
      status:'status',
      dataPagamento:'dataPagamento',
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
