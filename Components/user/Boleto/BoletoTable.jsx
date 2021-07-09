import { Table } from "antd";

export default function BoletoTable() {
  const columns = [
    {
      title: 'Pagador',
      dataIndex: 'Pagador',
    },
    {
      title: 'Data de Vencimento',
      dataIndex: 'dataVencimento',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: 'Valor',
      dataIndex: 'Valor',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      filters: [
        {
          text: 'Pendente',
          value: 'Pendente',
        },
        {
          text: 'Atrasado',
          value: 'Atrasado',
        },
        {
          text: 'Pago',
          value: 'Pago',
        }
      ]
    }
  ];
  
  const data = [
    {
      key: '1',
      Pagador: 'João Fernando',
      dataVencimento: "20/08/2021",
      Valor: 'R$ 60,00',
      Status: 'Pendente',
    },
    {
      key: '2',
      Pagador: 'Lucas andre',
      dataVencimento: '20/07/2021',
      Valor: 'R$ 160,00',
      Status: 'Pendente',
    },
    {
      key: '3',
      Pagador: 'Guilherme Ferreira',
      dataVencimento: "01/07/2021",
      Valor: 'R$ 60,00',
      Status: 'Pago',
    },
    {
      key: '4',
      Pagador: 'Fernando Borges',
      dataVencimento: "06/06/2021",
      Valor: 'R$ 600,00',
      Status: 'Atrasado',
    }
  ];
  
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
  
  return(
    <Table columns={columns} dataSource={data} onChange={onChange} />
    )
};
