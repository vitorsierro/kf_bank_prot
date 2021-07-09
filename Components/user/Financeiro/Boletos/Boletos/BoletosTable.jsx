import { Table } from 'antd';
import  styled  from '../../../../../styles/Transferencia.module.css' 

export default function BoletosTable() {
  const columns = [
    {
      title: 'Pagador',
      dataIndex: 'pagador',
    },
    {
      title: 'Vencimento',
      dataIndex: 'vencimento',
    },
    {
      title: 'Valor Cobrado',
      dataIndex: 'valorCobrado',
    },
    {
      title: 'Valor Pago',
      dataIndex: 'valorPago',
    },
    {
      title: 'Valor Recebido',
      dataIndex: 'valorRecebido',
    },
    {
      title: 'Tipo',
      dataIndex: 'tipo',
    },
    {
      title: 'Parcela',
      dataIndex: 'parcela',
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
      pagador:'pagador',
      vencimento:'22/08/2021',
      valorCobrado:'R$ 150,00',
      valorPago:'R$ 50,00',
      valorRecebido:'R$ 100,00',
      tipo: 'tipo',
      parcela: 'parcela',
      referencia: 'referência',
      status:'Pendente',
      acao:'...' 
    },
    {
      key: '2',
      pagador:'pagador',
      vencimento:'22/08/2021',
      valorCobrado:'R$ 150,00',
      valorPago:'R$ 50,00',
      valorRecebido:'R$ 100,00',
      tipo: 'tipo',
      parcela: 'parcela',
      referencia: 'referência',
      status:'Pendente',
      acao:'...' 
    }
  ];
  
  function onChange(pagination) {
    console.log('params', pagination);
  }
  
  return(
    <Table columns={columns} dataSource={data} 
    pagination={{ pageSize:10 }}
    onChange={onChange} className={`${styled.TableBackground} ${styled.TablePix}`}
    style={{margin:'1rem 10rem !important', padding:'2rem 3rem !important'}} />
    )
};
