import { Table } from 'antd';
import  styled  from '../../../../styles/Transferencia.module.css' 

export default function RelatorioCobrancasTable() {
  const columns = [
    {
      title: 'Data',
      dataIndex: 'data',
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
      title: 'Data de Atualização',
      dataIndex: 'dataAtualizacao',
    },
    {
      title: 'Referência',
      dataIndex: 'referencia',
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
      data:'22/06/2021  14:05:00',
      descricao:'descrição',
      valor:'R$ 20,00',
      dataAtualizacao:'10/08/2021',
      referencia: 'Referência',
      situacao: 'Aprovado',
      motivo:'Motivo',
      acao:'...' 
    },
    {
      key: '2',
      data:'22/06/2021  14:05:00',
      descricao:'descrição',
      valor:'R$ 20,00',
      dataAtualizacao:'10/08/2021',
      referencia: 'Referência',
      situacao: 'Aprovado',
      motivo:'Motivo',
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
