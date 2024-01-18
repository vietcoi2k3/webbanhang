import { useEffect, useState } from 'react';
import { Space, Table,  message, Popconfirm, Tag } from 'antd';
import { DeleteOutlined, CheckOutlined, PlusOutlined } from '@ant-design/icons';



const data = [
  {
    id: 1,
    customer: "huyen",
    product: "Nrt Uzumaki Sneakers Personalized Anime Shoes MN2903",
    totalCost: "100",
    time: "13:58:40 19/6/2023",
    status: "shipped",
  },
  {
    id: 2,
    customer: "huyen",
    product: "Nrt Uzumaki Sneakers Personalized Anime Shoes MN2903",
    totalCost: "100",
    time: "13:58:40 19/6/2023",
    status: "processing",
  },
  {
    id: 3,
    customer: "huyen",
    product: "Nrt Uzumaki Sneakers Personalized Anime Shoes MN2903",
    totalCost: "200",
    time: "13:58:40 19/6/2023",
    status: "processing",
  },
  {
    id: 4,
    customer: "huyen",
    product: "Nrt Uzumaki Sneakers Personalized Anime Shoes MN2903",
    totalCost: "300",
    time: "13:58:40 19/6/2023",
    status: "shipped",
  },


];


const Order = () => {
  const [isModaDelOpen, setisModaDelOpen] = useState(false);

  const [productForEditing, setProductForEditing] = useState({})
  const columns = [
    {
      title: 'No.',
      dataIndex: 'index',
      key: 'index',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Total cost',
      dataIndex: 'totalCost',
      key: 'totalCost',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_, { status }) => (
        <Tag color={status == "shipped" ? "green" : "red"}>
          {status.toUpperCase()}
        </Tag>
      )
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
          </Popconfirm>
          <CheckOutlined style={{ color: "green", cursor: "pointer" }} />
        </Space>
      ),
    },
  ];

  const confirm = (e) => {
    console.log(e);
    message.success('Click on Yes');
  };
  const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
  };
  return (
    <div className='flex flex-col '>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default Order

