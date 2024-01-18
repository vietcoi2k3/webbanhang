import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { useState } from 'react';
const ModalAddItem = ({ isModalAddOpen, setIsModalAddOpen, columns }) => {
  let temp = JSON.parse(localStorage.getItem('dataSource'))
  const showModal = () => {
    setIsModalAddOpen(true);
  };
  const handleOk = () => {
    setIsModalAddOpen(false);
  };
  const handleCancel = () => {
    setIsModalAddOpen(false);
  };
  const onFinish = (values) => {
    const object2 = Object.assign({}, values);
    
    //  productNew=  JSON.stringify(productNew)
     console.log(JSON.stringify(object2))
    // localStorage.setItem('dataSource',)
    setIsModalAddOpen(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (

    <Modal
      title="Add product"
      open={isModalAddOpen}
      onCancel={() => setIsModalAddOpen(false)}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" htmlType="submit" onClick={onFinish} form="formAddItem">
          Ok
        </Button>,
      ]}
    >
      <Form
        name="basic"
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        id="formAddItem"

      >
        {
          columns.map((col) =>
            <Form.Item
              key={col.key}
              label={col.title}
              name={col.key}
              type='file'
              rules={[
                {
                  required: true,
                  message: `Please input your ${col.key}!`,
                },
              ]}
            >
            {col.title === 'Img' ? <input type="file" /> : <Input />}
            </Form.Item>)
        }

      </Form>
    </Modal>

  );
};
export default ModalAddItem;

