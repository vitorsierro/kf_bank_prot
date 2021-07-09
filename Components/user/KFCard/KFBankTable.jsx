import { Table } from 'antd';
import  styled  from '../../../styles/Transferencia.module.css' 

export default function KFBankTable() {
  const columns = [
    {
      title: 'Data da Solicitação',
      dataIndex: 'dataSolicitacao',
    },
    {
      title: 'Nome Completo',
      dataIndex: 'nome',
    },
    {
      title: 'Documento',
      dataIndex: 'documento',
    },
    {
      title: 'Número do Cartão',
      dataIndex: 'numeroCartao',
    },
    {
      title: 'Saldo',
      dataIndex: 'saldo',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Ação',
      dataIndex: 'acao',
    }
  ];
  const data = [
    {
      key: '1',
      dataSolicitacao:'22/06/2021  14:05:00',
      nome:'Lucas',
      documento: 'xxx.xxx.xxx-xx',
      numeroCartao:'xxxx xxxx xxxx xxxx',
      saldo:'R$ 50,00',
      status:'ativo',
      acao:'...' 
    },
    {
      key: '2',
      dataSolicitacao:'22/06/2021  14:05:00',
      nome:'Lucas',
      documento: 'xxx.xxx.xxx-xx',
      numeroCartao:'xxxx xxxx xxxx xxxx',
      saldo:'R$ 50,00',
      status:'ativo',
      acao:'...' 
    },
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

