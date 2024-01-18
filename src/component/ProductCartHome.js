import React from 'react'
import { useNavigate } from "react-router-dom";
const ProductCartHome = ({ item }) => {
    const navigate = useNavigate();
    return (
        <div className='h-[340px] flex flex-col items-center justify-between w-[268px] px-[12px] cursor-pointer mr-[20px]' onClick={() => navigate(`/products/${item.id}`)}>
            <img className='h-[268px]' src={item.img} />
            <p className='mb-[5px] text-center text-[13px]'>{item.description}</p>
            <p className='mb-[5px] text-emerald-800 font-semibold tracking-widest text-[1.143em]'>${item.price} USD</p>
        </div>
    )
}

export default ProductCartHome