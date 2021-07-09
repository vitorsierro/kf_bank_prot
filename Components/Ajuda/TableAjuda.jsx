import { Table } from 'antd';
import  styled  from '../../styles/Transferencia.module.css'; 

export default function TableAjuda() {
  const columns = [
    {
      title: 'Data da Solicitação',
      dataIndex: 'dataSolicitacao',
    },
    {
      title: 'Assunto',
      dataIndex: 'assunto',
    },
    {
      title: 'Departamento',
      dataIndex: 'departamento',
    },
    {
      title: 'Código',
      dataIndex: 'codigo',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Data da Atualização',
      dataIndex: 'dataAtualizacao',
    },
    {
      title: 'Ação',
      dataIndex: 'acao',
    }
  ];
  
  const data = [
    {
      key: '1',
      dataSolicitacao:'01/07/2021',
      assunto:'teste',
      departamento: 'XD Contabilk',
      codigo:'codigo',
      status: 'ativo',
      dataAtualizacao: '02/07/2021',
      acao:'...' 
    },
    {
      key: '2',
      dataSolicitacao:'01/07/2021',
      assunto:'teste',
      departamento: 'XD Contabilk',
      codigo:'codigo',
      status: 'ativo',
      dataAtualizacao: '02/07/2021',
      acao:'...' 
    }
  ];
  
  function onChange(pagination) {
    console.log('params', pagination);
  }
  
  return(
    <Table columns={columns} dataSource={data} 
    pagination={{ pageSize:5 }}
    onChange={onChange} className={styled.TableBackground} />
    )
};
