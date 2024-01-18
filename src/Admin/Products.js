import { useEffect, useState } from 'react';
import { Space, Table, Button, message, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import ModalAddItem from '../component/ModalAddItem';
import ModalDeleteItem from '../component/ModalDeleteItem';
import ModalSetItem from '../component/ModalSetItem';
let startIndex = 0;

const data = [
  {
    id: 1,
    img: "https://img.thesitebase.net/10266/10266415/products/ver_1/0x360@16837976424928036352.jpeg",
    description: "Muichiro Tokito Sneakers Anime Personalized Name MV2404",
    price: 99.95,
    collections: "PERSONALIZED"
  },
  {
    id: 2,
    img: "https://img.thesitebase.net/10266/10266415/products/ver_1/0x720@1685693632575.jpg",
    description: "Akatsuki Itachi Sneakers Personalized Anime Shoes MN2903",
    price: 99.95,
    collections: "PERSONALIZED"
  },
  {
    id: 3,
    img: "https://img.thesitebase.net/10266/10266415/products/ver_1/0x360@1684296109074.jpg",
    description: "Nrt Uzumaki Sneakers Personalized Anime Shoes MN2903",
    price: 99.95,
    collections: "PERSONALIZED"
  },
  {
    id: 4,
    img: "https://img.thesitebase.net/10266/10266415/products/ver_1/0x720@1682416801cdd7f0405d.jpeg",
    description: "Nrt Uzumaki Sneakers Personalized Anime Shoes MN2903",
    price: 99.95,
    collections: "PERSONALIZED"
  },
  {
    id: 5,
    img: "https://img.thesitebase.net/10266/10266415/products/ver_1/0x360@16866533704b54f40e4b.jpeg",
    description: "Mio Akiyama J1-Sneakers Custom MN0504",
    price: 99.95,
    collections: "J1S SNEAKERS"
  },
  {
    id: 6,
    img: "https://img.thesitebase.net/10266/10266415/products/ver_1/0x360@16866533709e05a9289c.jpeg",
    description: "Inori Yuzuriha J1-Sneakers Custom MN0504",
    price: 99.95,
    collections: "J1S SNEAKERS"
  },
  {
    id: 7,
    img: "https://img.thesitebase.net/10266/10266415/products/ver_1/0x360@16866533706f70b95ad8.jpeg",
    description: "Power J1-Sneakers Custom MN0504",
    price: 99.95,
    collections: "J1S SNEAKERS"
  },
  {
    id: 8,
    img: "https://img.thesitebase.net/10266/10266415/products/ver_1/0x720@1686206051ec27d21050.jpeg",
    description: "Trafalgar D. Water Law J1-Sneakers MN06",
    price: 99.95,
    collections: "J1S SNEAKERS"
  },
  {
    id: 9,
    img: "https://img.thesitebase.net/10266/10266415/products/ver_1/0x360@1686648843941671e9f6.jpeg",
    description: "Violet Evergarden J1-Sneakers Custom MN0504",
    price: 99.95,
    collections: "HIGH TOP SHOES"
  },
  {
    id: 10,
    img: "https://img.thesitebase.net/10266/10266415/products/ver_1/0x360@168621779193c6f3db63.jpeg",
    description: "Inori Yuzuriha J1-Sneakers Custom MN0504",
    price: 99.95,
    collections: "HIGH TOP SHOES"
  },
  {
    id: 11,
    img: "https://img.thesitebase.net/10266/10266415/products/ver_1/0x360@16866533706f70b95ad8.jpeg",
    description: "Power J1-Sneakers Custom MN0504",
    price: 99.95,
    collections: "HIGH TOP SHOES"
  },
  {
    id: 12,
    img: "https://img.thesitebase.net/10266/10266415/products/ver_1/0x360@16866488415433e85e6b.jpeg",
    description: "Violet Evergarden J1-Sneakers Custom MN0504",
    price: 99.95,
    collections: "HIGH TOP SHOES"
  },
];


const Products = () => {
  localStorage.setItem('dataSource',JSON.stringify(data))
  // const [data,setData] = useState([])
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModaDelOpen, setisModaDelOpen] = useState(false);
  const [isModaSetOpen, setisModaSetOpen] = useState(false);
  const [productForEditing, setProductForEditing] = useState({})
  useEffect(()=>{
    if(localStorage.getItem('dataSource'))
    // setData(JSON.parse(localStorage.getItem('dataSource')))
    console.log(data[0])
  },[])
  const columns = [
    {
      title: 'No.',
      dataIndex: 'index',
      key: 'index',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Name',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Img',
      dataIndex: 'img',
      key: 'img',
      render: (linkImg) => <img style={{ height: '40px' }} src={linkImg} />
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Collections',
      dataIndex: 'collections',
      key: 'collections',
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={()=>{confirm(record)}}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
          </Popconfirm>
          <EditOutlined style={{ cursor: "pointer" }} onClick={() => handleSetItem(record)} />
        </Space>
      ),
    },
  ];
  const handleSetItem = (record) => {
    setProductForEditing(record)
    setisModaSetOpen(true)
  }
  const confirm = (record) => {
    let index = data.findIndex(e => e.id===record.id)
    if (index !== -1) {
      data.splice(index, 1);
      localStorage.setItem('dataSource',JSON.stringify(data))
      // setData([...data])
    }
  };
  const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
  };
  return (
    <div className='flex flex-col '>
      <ModalAddItem isModalAddOpen={isModalAddOpen} setIsModalAddOpen={setIsModalAddOpen} columns={columns} />
      <ModalSetItem isModaSetOpen={isModaSetOpen} setisModaSetOpen={setisModaSetOpen} columns={columns} productForEditing={data[0]} />
      <div className='text-right mb-5'>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setIsModalAddOpen(true)} >
          Add product
        </Button>

      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default Products