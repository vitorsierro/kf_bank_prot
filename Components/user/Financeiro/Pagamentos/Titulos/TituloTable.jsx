import { Table } from 'antd';
import  styled  from '../../../styles/Transferencia.module.css' 

export default function TituloTable() {
  const columns = [
    {
      title: 'Data do Vencimento',
      dataIndex: 'dataVencimento',
    },
    {
      title: 'Data da Solicitação',
      dataIndex: 'dataSolicitacao',
    },
    {
      title: 'Descrição',
      dataIndex: 'descricao',
    },
    {
      title: 'Data da Atualização',
      dataIndex: 'dataAtualizacao',
    },
    {
      title: 'Valor',
      dataIndex: 'valor',
    },
    {
      title: 'Observação',
      dataIndex: 'observacao',
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
      dataVencimento:'dataVencimento',
      dataSolicitacao:'dataSolicitacao',
      descricao:'descricao',
      dataAtualizacao:'dataAtualizacao',
      valor:'valor',
      observacao:'observacao',
      Status:'Status',
      acao:'...' 
    },
    {
      key: '2',
      dataVencimento:'dataVencimento',
      dataSolicitacao:'dataSolicitacao',
      descricao:'descricao',
      dataAtualizacao:'dataAtualizacao',
      valor:'valor',
      observacao:'observacao',
      Status:'Status',
      acao:'...'  
    }
  ];
  
  function onChange(pagination) {
    console.log('params', pagination);
  }
  
  return(
    <Table columns={columns} dataSource={data} 
    pagination={{ pageSize:10 }}
    onChange={onChange} className={`${styled.TableBackground} ${styled.TablePix}`} />
    )
};
