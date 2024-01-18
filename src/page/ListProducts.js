import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../AppContext'
import { useParams } from 'react-router-dom'
import ProductCartHome from '../component/ProductCartHome'
import { CaretDownOutlined } from '@ant-design/icons'

const ListProducts = () => {
  const [isHidden, setIsHidden] = useState(false)
  const { arrCollections, productsArr } = useContext(AppContext)
  const { pathName } = useParams();
  let nameCollection = arrCollections.find(collection => collection.pathName === pathName).name
  const [productDisplay,setProductDisplay] =useState( productsArr.filter(product => product.collections === nameCollection))
  const handleSortDate = () => {
    productDisplay.sort((a, b) => {
      return a.date-b.date;
    });
    console.log(productDisplay)

  };
  const handleSortDate2 = () => {
    productDisplay.sort((a, b) => {
      return b.date-a.date;
    });
    console.log(productDisplay)

  };
  const handleSortByPrice = () => {
    productDisplay.sort((a, b) => {
      return a.price-b.price;
    });
    console.log(productDisplay)

  };
  const handleSortByPrice2 = () => {
    productDisplay.sort((a, b) => {
      return b.price-a.price;
    });
    console.log(productDisplay)

  };
  const handleSortAlphabetically = () => {
    productDisplay.sort((a, b) => {
      const nameA = a.description.toLowerCase();
      const nameB = b.description.toLowerCase();

      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });
    console.log(productDisplay)

  };
  const handleSortAlphabetically2 = () => {
    productDisplay.sort((a, b) => {
      const nameA = a.description.toLowerCase();
      const nameB = b.description.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    console.log(productDisplay)
  };
  return (
    <div className='h-[100vh] flex flex-col mt-[88px] px-[9%] items-center'>
      <div className="mt-[10px] mb-6 w-[100%]  text-[14px] font-[400] leading-5">
        <p className='text-[#001219] pl-[12px]'>HOME / {nameCollection}</p>
        <button onClick={() => { setIsHidden(!isHidden) }} className='ml-[12px] my-[10px] border pl-[5px] py-[10px] w-[100px] relative'>Featured
          <CaretDownOutlined className='ml-[15px] text-[12px] translate-y-[-2px]' />
          {isHidden && <ul className='border shadow absolute bg-white  w-[120px] py-[10px]'>
            <li onClick={handleSortByPrice} className='h-[30px] hover:bg-blue-200 leading-[30px]'>low  to high</li>
            <li onClick={handleSortByPrice2} className='h-[30px] hover:bg-blue-200 leading-[30px]'>hight  to low</li>
            <li onClick={handleSortAlphabetically} className='h-[30px] hover:bg-blue-200 leading-[30px]'>Sort by [a-z]</li>
            <li onClick={handleSortAlphabetically2} className='h-[30px] hover:bg-blue-200 leading-[30px]'>Sort by [z-a]</li>
            <li onClick={handleSortDate} className='h-[30px] hover:bg-blue-200 leading-[30px]'>newest</li>
            <li onClick={handleSortDate2} className='h-[30px] hover:bg-blue-200 leading-[30px]'>oldest </li>
            
          </ul>}
        </button>
        <div className="flex flex-row flex-wrap py-[10px] mr-[20px]">
          {
            productDisplay.map((item, id) => <div className='mr-[18px]'><ProductCartHome  item={item} key={id} /></div>)
          }

        </div>
      </div>

    </div>
  )
}

export default ListProducts