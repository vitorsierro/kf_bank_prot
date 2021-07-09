import { Table } from 'antd';
import  styled  from '../../../styles/Transferencia.module.css';

export default function HistoricoPixTable() {
  const columns = [
    {
      title: 'Iniciado',
      dataIndex: 'iniciado',
    },
    {
      title: 'Beneficiário',
      dataIndex: 'beneficiario',
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
      title: 'Atualizado',
      dataIndex: 'atualizado',
    },
    {
      title: 'Situação',
      dataIndex: 'situacao',
    },
    {
      title: 'Motivo',
      dataIndex: 'motivo',
    },
    {
      title: 'Ação',
      dataIndex: 'acao',
    }
  ];
  
  const data = [
    {
      key: '1',
      iniciado:'...',
      beneficiario:'Lucas',
      descricao: 'Boleto',
      valor: 'R$ 4,50',
      atualizado:'01/07/2021',
      situacao: 'Efetuado',
      motivo:'...',
      acao:'...' 
    },
    {
      key: '2',
      iniciado:'...',
      beneficiario:'Lucas',
      descricao: 'Boleto',
      valor: 'R$ 4,50',
      atualizado:'01/07/2021',
      situacao: 'Efetuado',
      motivo:'...',
      acao:'...' 
    }
  ];
  
  function onChange(pagination) {
    console.log('params', pagination);
  }
  
  return(
    <Table columns={columns} dataSource={data} 
    pagination={{ pageSize:5 }}
    onChange={onChange} className={`${styled.TableBackground} ${styled.TablePix}`} />
    )
};
