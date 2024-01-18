
import { Button, Modal } from 'antd';
import { useState } from 'react';
const ModalDeleteItem = ({isModaDelOpen, setisModaDelOpen}) => {
  const showModal = () => {
    setisModaDelOpen(true);
  };
  const handleOk = () => {
    setisModaDelOpen(false);
  };
  const handleCancel = () => {
    setisModaDelOpen(false);
  };
  return (
    <>
      <Modal open={isModaDelOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Do you confirm that you want to delete this product?</p>
      </Modal>
    </>
  );
};
export default ModalDeleteItem;
