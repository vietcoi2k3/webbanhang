import React, { useState, useContext } from 'react'
import img from '../assets/img/0x1512@164335548704b22996ff.webp'
import { Col, Row, ConfigProvider } from 'antd';
import { Button, Form, Input, InputNumber, Checkbox } from 'antd';
import imgPayment from '../assets/img/Screenshot 2023-06-1102727.png'
import { RightOutlined } from '@ant-design/icons/lib/icons';
import { useNavigate } from "react-router-dom";
import { AppContext } from '../AppContext';
const layout = {

};

const onFinish = (values) => {
  console.log(values);
};
const Checkout = () => {
  const { UserProducts, CurrentUser, totalCost } = useContext(AppContext)
  const [productsArr, setProducsArr] = useState(UserProducts || [])
  const {email,firstName,lastName, phone} = CurrentUser
  const initialValues = {
    email,firstName,lastName, phoneNumber:phone
  };
  const navigate = useNavigate();

  return (
    <div className='pl-[80px] flex flex-row justify-between w-[100%]'>
      <div className='pt-[56px] pr-[64px] w-[652px]'>
        <img className=' h-[40px]' src={img} onClick={() => { navigate('/') }} />
        <div className='flex flex-row items-center text-left my-4'>
          <a className='text-[blue]'>Cart</a>
          <RightOutlined className='px-[10px] w-8 h-8 text-[#777] font-[600]' />
          <p>Checkout</p>
        </div>
        <div className='flex flex-row justify-between items-center p-[10px] '>
          <span className='section-title'>Shipping Address</span>
          <p className='text-[14px] text-[#1a1a1a]'>Already have an account? Sign in or continue as guest. Log in</p>
        </div>
        <div className='relative'>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{
              maxWidth: 600,
            }}
            id="formCheckout"
            initialValues={initialValues} 
          >
            <Form.Item
              name='email'
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Email"/>
            </Form.Item>
            <Form.Item

              name='firstName'
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="First Name"/>
            </Form.Item>
            <Form.Item
              name='lastName'
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Last Name"/>
            </Form.Item>
            <Form.Item
              name='address'
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Address" />
            </Form.Item>
            <Form.Item
              name='phoneNumber'
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Phone Number"/>
            </Form.Item>
            <Form.Item>
              <Checkbox>
                Text me with news and offers
              </Checkbox>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
              }}
            >
            </Form.Item>
          </Form>
          <div className='line-row'></div>
        </div>
        <div className='relative p-[10px]' >
          <span className='section-title'>Shipping</span>
          <h5 className='text-[#777] font-[400] mb-0 mt-2 text-[12px]'>Calculated based on your address.</h5>
          <p className='text-[14px] font-[400] text-[#1a1a1a]'>Standard Shipping — $212.35 USD</p>
          <p className='text-[14px] font-[400] text-[#777] mb-4'>Estimated delivery: July 01 - 11</p>
          <div className='line-row'></div>
        </div>
        <div>
          <span className='section-title my-4'>Payment</span>
          <div className='bg-[#f3f3f3] rounded-[5px] border-[1px]'>
            <div className='flex flex-row justify-between items-center p-4 border-b-[1px] border-b-[#dfdfdf]'>
              <div className=''>
                <strong>
                  <div>Credit or Debit Card</div>
                </strong>
                <span className='text-[12px] text-[#777]'>All transactions are secure and encrypted</span>

              </div>
              <img src={imgPayment} className='h-[38px]' />
            </div>
            <div className='p-4'>
              <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{
                  maxWidth: 600,
                  backgroundColor: "#fff",
                  padding: 8,
                }}
                
              >
                <Form.Item
                  name='cardNumber'
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="Card Number" />
                </Form.Item>
                <Form.Item
                  name='cardholderName'
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="Cardholder Name" />
                </Form.Item>
                <Form.Item
                  name='cardNumber'
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="Card Number" />
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="text-[12px] font-[400] text-[#777] pt-6">By clicking button Place Your Order, you agree to the Terms of service</div>
          <div className=' text-right'>
            <button key="submit" htmlType="submit" form="formCheckout" className='p-5 mb-[5px] mt-4 text-[#fff] bg-[#2C9516] rounded-[5px] py-[18px] px-[56px]'>
              <div className='text-[1.375em] font-[600]'>Place Your Order</div>
              <div className='text-[0.755em] font-[400]'>Total: 1,743.50</div>
            </button>
          </div>
        </div>
      </div>
      <div className='bg-[#f3f3f3] pt-[56px] px-[64px] border-l-[1px] border-l-[#dfdfdf]'>
        <div className='relative'>
          {productsArr.map((product,id) => (
            <div className='flex flex-row w-[450px]' key={id}>
              <div>
                <img src={product.img} className='h-[66px] w-[66px]' />
              </div>
              <div className='flex flex-col ml-6'>
                <a className='mb-[7px]'>{product.description}</a>
                <p className='product-cart_options'>Men/US4</p>
                <p className='product-cart_options'>Custom name (If you don't need please ignore this option):</p>
              </div>
              <p className='product-cart__price pl-[14px]'>
                <span>${product.price} USD</span>
              </p>
            </div>
          ))}
          <div className='line-row'></div>
        </div>
        <div className='relative'>
          <div className='flex flex-row items-center justify-between pt-4'>
            <p>Subtotal</p>
            <h5>${totalCost} USD</h5>
          </div>
          <div className='flex flex-row items-center justify-between py-4'>
            <p>Shipping</p>
            <h5>$244.25 USD</h5>
          </div>
          <div className='line-row  mt-4'></div>
        </div>
        <div className='flex flex-row items-center justify-between pt-4'>
          <p>Total</p>
          <h5 className='text-[2.28em] font-[600] pt-5'>${totalCost+244.25} USD</h5>
        </div>
      </div>
    </div>
  )
}

export default Checkout