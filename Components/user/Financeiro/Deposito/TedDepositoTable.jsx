import { Table } from 'antd';
import  styled  from '../../../../styles/Transferencia.module.css' 

export default function TedDepositoTable() {
  const columns = [
    {
      title: 'Data',
      dataIndex: 'data',
    },
    {
      title: 'Pagador',
      dataIndex: 'pagador',
    },
    {
      title: 'Descrição',
      dataIndex: 'descricao',
    },
    {
      title: 'Valor',
      dataIndex: 'valor',
    },
    {
      title: 'Valor Recebido',
      dataIndex: 'valorRecebido',
    },
    {
      title: 'Observação',
      dataIndex: 'observacao',
    },
    {
      title: 'Referência',
      dataIndex: 'referencia',
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
      data:'22/06/2021  14:05:00',
      pagador:'pagador',
      descricao:'descrição',
      valor:'R$ 20,00',
      valorRecebido:'valorRecebido',
      observacao: 'observacao',
      referencia: 'Referência',
      status:'status',
      acao:'...' 
    },
    {
      key: '2',
      data:'22/06/2021  14:05:00',
      pagador:'pagador',
      descricao:'descrição',
      valor:'R$ 20,00',
      valorRecebido:'valorRecebido',
      observacao: 'observacao',
      referencia: 'Referência',
      status:'status',
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
