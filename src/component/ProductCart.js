import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from '../AppContext';
import '../style/ProductCart.css'
import { InputNumber } from 'antd';
const ProductCart = ({ product, sizeImg }) => {
    const { handleAddProduct, UserProducts } = useContext(AppContext)
    const [quantity, setQuantity] = useState(product.quantity || 1)
    useEffect(()=>{
        
        handleAddProduct({
            ...product,
            quantity:quantity
        })
    },[quantity])
    const increaseQuantity = () =>{
        setQuantity(prev=>prev+1)
    }
    const decreaseQuantity = () =>{
        setQuantity(prev=>prev-1<0?0:prev-1)
    }
    const styleImg = {
        height: sizeImg,
        width: sizeImg,
    }
    return (
        <div className='flex flex-row mb-[24px]'>
            <img style={{height:sizeImg, width:sizeImg}} src={product.img} />
            <div className='flex flex-col ml-6'>
                <a className='a-hover mb-[7px] border-[#fff] border-solid border-[1px]'>{product.description}</a>
                <p className='product-cart_options'>Men/US4</p>
                <p className='product-cart_options'>Custom name (If you don't need please ignore this option):</p>
                <p className='product-cart__price mb-[7px]'>
                    <span>${product.price} USD</span>
                </p>
                <div className='flex flex-row quantity  items-center overflow-hidden'>
                    <div className=' border-[#e6e6e6] border-solid border-[1px] h-[36px]'>
                        <button onClick={decreaseQuantity} className='px-[13px] h-[34px] font-[900]'><span>-</span></button>
                        <input type="number" className='h-[34px]' value={quantity}></input>
                        <button onClick={increaseQuantity}  className='px-[13px] h-[34px] font-[900]'><span>+</span></button>
                    </div>
                    <a className='ml-3 text-[14px] a-hover border-[#fff] border-solid border-[1px]'>Remove item</a>
                </div>
                <a className='text-[14px] border-[none] pl-2 my-2'>+ Add more items</a>
            </div>
        </div>
    )
}

export default ProductCart