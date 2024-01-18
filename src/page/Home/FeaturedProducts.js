import React, { useEffect, useReducer, useState } from 'react'
import productsApi from "../../api"
import { Link, useNavigate } from "react-router-dom";
import ProductCartHome from '../../component/ProductCartHome';

//toi la viet
const FeaturedProducts = ({ nameCollection, pathName }) => {
  const navigate = useNavigate();
  const [productsArr, setProducsArr] = useState(productsApi)
  useEffect(() => {
    const productsCollection = productsApi.filter(item => item.collections === nameCollection)
    setProducsArr(productsCollection.filter((item, index) => index < 4))
  }, [])

  const showListProducts = productsArr.map((item, id) =>
    <ProductCartHome item={item} key={id}/>
  )

  return (
    <div className='class flex flex-col items-center justify-center py-[18px]'>
      <h1 className='text-[24px] font-[600px] mb-10'>{nameCollection}</h1>
      <div className=' flex flex-row mb-[40px px-[12px] pt-[16px]'>
        {showListProducts}
      </div>
      <button className="mt-20 border-[1px] border-[#000] py-[10px] px-[22px] rounded-sm" onClick={()=>{navigate(`collection/${pathName}`)}}>View more</button>
    </div>
  )
}

export default FeaturedProducts