import React from 'react';
import {useContext,useState} from 'react'
import { AppContext } from '../AppContext';
import ProductCartHome from '../component/ProductCartHome';
import { Input } from 'antd';
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { useEffect } from 'react';

const Search = (props) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get('searchValue');
    const { Search } = Input;

    const {productsArr,setProductsArr} = useContext(AppContext)
    let productSource = productsArr.filter(product => product.description.includes('a'))
    let [productDisplay,setProductDisplay] =useState( productsArr.filter(product => product.description.includes(searchValue)))
    const onSearch =(value)=>{
        const filteredProducts = productSource.filter((product) =>
        product.description.includes(value)
      );
        setProductDisplay(filteredProducts)
    }

  return (
    <div className='mt-[95px] min-h-[50vh] px-[10.5%] '> 
    <Breadcrumb
    items={[
      {
        title: <a href="/">HOME</a>,
      },

      {
        title: "SEARCH",
      },
    ]}
  />
  <h2 className='tracking-wider text-2xl mt-[5px]'>SEARCH</h2>
  <Search
    className='w-[200px] my-[15px]'
    onSearch={onSearch}
  />
  <div className='flex flex-row flex-wrap'>
    {
         productDisplay.map((item, id) => <div className='mr-[10px]'><ProductCartHome  item={item} key={id} /></div>)
    }
  </div>
  </div>
  )
}

export default Search