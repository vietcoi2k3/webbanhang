import React, { useState, useContext } from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Col, Row } from 'antd';
import { AppContext } from '../AppContext';
import productsApi from "../api"
import ProductCart from '../component/ProductCart';
import '../style/Cart.css'
import img from '../assets/img/thanhToan.webp'
const Carts = () => {
  const { UserProducts, handleAddProduct, totalCost } = useContext(AppContext)
  const [productsArr, setProducsArr] = useState(UserProducts)
  const navigate = useNavigate();

  return (

    <div className='pt-[40px] px-3 pb-[128px] mx-[90px] px-[12px] text-[40px] font-[600]'>
      <div>
        <div className=''>
          <h1 className='text-left'>SHOPPING CART</h1>
          <Row>
            <Col span={16}>
              <div className='relative'>
                <div className='line-col'></div>
                {
                  productsArr.map(product => (
                    <ProductCart product={product} sizeImg='195px'/>
                  ))
                }
              </div>
            </Col>
            <Col span={8}>
              <div className='px-3 w-[366px]'>
                <div className='flex flex-row justify-between mb-[5px]'>
                  <h5>SUBTOTAL</h5>
                  <h5>{totalCost} USD</h5>
                </div>
                <p className='product-cart_options'>Please confirm the product size - Shipping fee is calculated at checkout</p>
                <button className='p-5 mb-[5px] mt-4 w-[100%] button_checkout text-[#fff] bg-[#010101] rounded-[5px]' onClick={() => { navigate("/checkout") }}>Checkout</button>
                <img src='https://img.thesitebase.net/files/10266415/2023/02/16/0x540@16765199379bee455049.png' />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Carts