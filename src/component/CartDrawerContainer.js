import React, { useState, useContext } from 'react'
import ProductCart from './ProductCart'
import { useNavigate } from "react-router-dom";
import { AppContext } from '../AppContext';
// import productsApi from "../api"
const CartDrawerContainer = ({ setCartDrawerContainerOpen }) => {
    const { UserProducts, totalCost } = useContext(AppContext)
    const [productsArr, setProducsArr] = useState(UserProducts)
    const navigate = useNavigate();
    return (
        <div className='absolute flex flex-col mt-4 z-30 w-[420px] px-3 border-[1px] border-[#E6E6E6] right-[120px] bg-[#fff] pt-6 overflow-hidden z-50' onMouseLeave={()=>setCartDrawerContainerOpen(false)}>
            <div style={{ position: 'absolute', right: '12px', top: '12px', color: '#666666' }} onClick={() => setCartDrawerContainerOpen(false)}>x</div>
            <div className="max-h-[300px] overflow-auto">
                {
                    productsArr.map(product => (
                        <ProductCart product={product} sizeImg='95px' />
                    ))
                }
            </div>
            <div className='pt-[5px] pb-4'>
                <div className='flex flex-row justify-between items-center mb-[7px]'>
                    <h5>SUBTOTAL</h5>
                    <h5>{totalCost}</h5>
                </div>
                <p className='product-cart_options mb-[7px]'>Please confirm the product size - Shipping fee is calculated at checkout</p>
                <button className='py-[10px] px-[22px] w-[100%] text-[16px] text-[#010101] bg-[#fff] rounded-[5px] border-[1px] border-[#010101] mb-3'>Go to cart</button>
                <button className='py-[10px] px-[22px] w-[100%] text-[16px] text-[#fff] bg-[#010101] rounded-[5px]'>Checkout</button>
            </div>
        </div>
    )
}

export default CartDrawerContainer