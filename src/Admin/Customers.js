import { useEffect, useState } from 'react';
import { Space, Table, message, Popconfirm, Tag, Switch } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import ModalAddItem from '../component/ModalAddItem';
import ModalDeleteItem from '../component/ModalDeleteItem';
import ModalSetItem from '../component/ModalSetItem';
let startIndex = 0;

const data = [
  {
    id: 1,
    fullname: "Nguyễn Ngọc Huyền",
    email: "huyen@gmail.com",
    account: "huyen",
    status: "active",
    off: false,
  },
  {
    id: 2,
    fullname: "Đỗ Quốc Việt",
    email: "viet@gmail.com",
    account: "viet",
    status: "active",
    off: false,
  },
  {
    id: 3,
    fullname: "Hoàng Việt Quang",
    email: "quang@gmail.com",
    account: "quang",
    status: "inactive",
    off: false,
  },
  {
    id: 4,
    fullname: "Tống Đức Luận",
    email: "luan@gmail.com",
    account: "luan",
    status: "active",
    off: false,
  },

];


const Customers = () => {
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
      title: 'Fullname',
      dataIndex: 'fullname',
      key: 'fullname',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Account',
      dataIndex: 'account',
      key: 'account',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_, { status }) => (
        <Tag color={status == "active" ? "green" : "red"}>
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
          <Switch defaultChecked onChange={onChangeSwitch} />
        </Space>
      ),
    },
  ];

  const onChangeSwitch = (checked) => {
    console.log(`switch to ${checked}`);
  };
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

export default Customers
