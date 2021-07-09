import { Table } from 'antd';
import  styled  from '../../../../../styles/Transferencia.module.css'; 

export default function TransferenciasTable() {
  const columns = [
    {
      title: 'Dt. Solicitação',
      dataIndex: 'dataSolicitacao',
    },
    {
      title: 'Titular',
      dataIndex: 'titular',
    },
    {
      title: 'Documento',
      dataIndex: 'documento',
    },
    {
      title: 'N° da Conta',
      dataIndex: 'numConta',
    },
    {
      title: 'Valor',
      dataIndex: 'valor',
    },
    {
      title: 'Dt. Agendamento',
      dataIndex: 'dataAgendamento',
    },
    {
      title: 'Dt. Transferência',
      dataIndex: 'dataTransferencia',
    },
    {
      title: 'Observação',
      dataIndex: 'observacao',
    },
    {
      title: 'Referência',
      dataIndex: 'referencia',
    }
  ];
  const data = [
    {
      key: '1',
      dataSolicitacao:'dataSolicitacao',
      titular:'titular',
      documento:'documento',
      numConta:'numConta',
      valor:'valor',
      dataAgendamento:'dataAgendamento',
      dataTransferencia:'dataTransferencia',
      observacao:'observacao',
      referencia:'referencia'
    },
    {
      key: '2',
      dataSolicitacao:'dataSolicitacao',
      titular:'titular',
      documento:'documento',
      numConta:'numConta',
      valor:'valor',
      dataAgendamento:'dataAgendamento',
      dataTransferencia:'dataTransferencia',
      observacao:'observacao',
      referencia:'referencia'
    }
  ];
  
  function onChange(pagination) {
    console.log('params', pagination);
  }
  
  return(
    <Table columns={columns} dataSource={data} 
    pagination={{ pageSize:6 }}
    onChange={onChange} className={`${styled.TableBackground} ${styled.TablePix}`} />
    )
};
