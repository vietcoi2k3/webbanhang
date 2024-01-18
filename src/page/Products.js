import React, {useContext, useEffect} from 'react'
import { AppContext } from '../AppContext';
import { Button } from 'antd';
import { Input } from 'antd';
import { FireFilled } from '@ant-design/icons';
import { useState } from 'react';
import productsApi from "../api"
import { useNavigate, useParams } from "react-router-dom";
import { FacebookFilled,TwitterCircleFilled,MailOutlined,InstagramOutlined} from '@ant-design/icons';
import { Carousel } from 'antd';


const Products = () => {
  const { id } = useParams();

  const { UserProducts, handleAddProduct } = useContext(AppContext)
  const productData = productsApi.find(product=>product.id==id)
  const UserProductsData = UserProducts.find(product=>product.id==id) || 0
  console.log({productData, UserProductsData})
  const price = productData.price || 0
  const [count, setCount] = useState(UserProductsData.quantity || 0);
  const [total, setTotal] = useState(UserProductsData.total || 0);
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    setTotal(count*price)
  }, [count])

  const increment = () => { 
    setCount(count + 1)
  }
  const decrement = () => {
    if (count <= 1) return
    setCount(count - 1)
  }


  const navigate = useNavigate();
  const handleAddToCart = () => {
    handleAddProduct({...productData, quantity:count, total:total})
    navigate('/cart')
  }

  return (
    <div>
      <div className=' bg-[#fff] flex flex-row px-[15%] mt-[100px]'>
        <img className='h-[500px]' src={productData.img} />
        <div className='ml-[10%]'>
          <h1 className='text-lg tracking-widest'>{productData.description}</h1>
          <h4 className='text-emerald-800 tracking-widest font-semibold'>${productData.price}USD</h4>
          <p className='font-semibold text-xs tracking-wide opacity-90 my-[5px]'> <FireFilled className="translate-y-[-4px] " /> 6 people have this in their cart</p>
          <p className='text-sm opacity-95  my-[5px]'><span className='font-medium'>Gender:</span> Men</p>
          <Button className='py-[5px] px-[10px] text-xs tracking-wider mr-[10px]'>Men</Button>
          <Button className='py-[5px] px-[10px] text-xs tracking-wider mr-[10px]'>Woman</Button>
          <p className=' my-[5px] text-sm opacity-95 '><span className='font-medium '>Size:</span>  US4     <hr className='w-[12px] font-medium h-[1px] inline-block translate-y-[-4px] mx-[5px]' /> <span className='text-blue-400'>    Size Guide</span></p>
          <div>
            <Button className='py-[5px] px-[10px] text-xs tracking-wider mr-[10px]'>US4</Button>
            <Button className='py-[5px] px-[10px] text-xs tracking-wider mr-[10px]'>US5</Button>
            <Button className='py-[5px] px-[10px] text-xs tracking-wider mr-[10px]'>US5.</Button>
            <Button className='py-[5px] px-[10px] text-xs tracking-wider mr-[10px]'>US6</Button>
            <Button className='py-[5px] px-[10px] text-xs tracking-wider mr-[10px]'>US7</Button>
            <Button className='py-[5px] px-[10px] text-xs tracking-wider mr-[10px]'>US8.</Button>
            <Button className='py-[5px] px-[10px] text-xs tracking-wider mr-[10px]'>US8.5</Button>
          </div>
          <div className=' my-[5px]'>
            <Button className='py-[5px] px-[10px] text-xs tracking-wider mr-[10px]'>US9</Button>
            <Button className='py-[5px] px-[8px] text-xs tracking-wider mr-[10px]'>US10</Button>
            <Button className='py-[5px] px-[8px] text-xs tracking-wider mr-[10px]'>US11</Button>
            <Button className='py-[5px] px-[8px] text-xs tracking-wider mr-[10px]'>US12</Button>
            <Button className='py-[5px] px-[8px] text-xs tracking-wider mr-[10px]'>US13</Button>
            <Button className='py-[5px] px-[8px] text-xs tracking-wider mr-[10px]'>US14</Button>
            <Button className='py-[5px] px-[8px] text-xs tracking-wider mr-[10px]'>US15</Button>
          </div>
          <p className='text-sm my-[5px] font-semibold my-[10px]'>Custom name (If you don't need please ignore this option)</p>
          <Input placeholder="YOUR NAME HERE" />
          <div className='flex  my-[10px]'>
            <div className='flex w-20 h-20 border text-center items-center'>
              <div className='grow-[3] h-[100%] leading-[5] border-r-[1px]'>{count}</div>
              <div className='grow-[2] flex flex-col items-center justify-center h-[100%] '>
                <div className='h-[100%]  w-[100%] border-b-[1px] leading-[2.5] cursor-pointer' onClick={increment}>+</div>
                <div className='h-[100%]  w-[100%] leading-[2.5] cursor-pointer ' onClick={decrement}>-</div>
              </div>
            </div>
            <button className='bg-black grow ml-[15px] rounded-sm shadow text-white font-semibold text-xl' onClick={handleAddToCart}>Add to cart</button>

          </div>
          <p className='text-sm my-[5px] font-semibold my-[10px]'>Estimated delivery between:</p>
          <p className='text-md my-[5px] font-semibold my-[10px] border-b py-[10px]'>July 02 - 12 <span className='text-xs tracking-wider font-normal opacity-60'>(delivery to Vietnam)</span></p>
          <div className='border-b py-[10px]'>  <img src='https://img.thesitebase.net/files/10266415/2023/05/30/0x720@16854297612dc402aa1b.png' className=''></img></div>
          <div className='py-[5px] w-[100%] border-b'><p className='ml-[5px]'> Type : <a className=' hover:border-b border-black cursor-pointer'>J1 Sneakers</a></p></div>
          <div className='py-[5px] ml-[5px]'>Share :             
          <FacebookFilled className='text-blue-700 text-lg mr-[10px] ml-[20px] cursor-pointer' /> 
          <TwitterCircleFilled className='text-blue-300 text-lg  mr-[10px] cursor-pointer' /> 
          <MailOutlined  className='text-gray-700 text-lg  mr-[10px] cursor-pointer'/>
          <InstagramOutlined className='text-pink-700 text-lg  mr-[10px] cursor-pointer'/>
          </div>
        </div>

      </div>
      <div className='w-[100%] min-h-[400px] bg-stone-200 px-[15%] py-[30px] mt-[20px]'>
        <ul className='flex mb-[20px]'>
          <li className={`mr-[20px] tracking-widest cursor-pointer ${index === 0 ? 'border-b border-black' : 'text-gray-500'}`} onClick={() => { setIndex(0) }} >DESCRIPTION</li>
          <li className={`mr-[20px] tracking-widest cursor-pointer ${index === 1 ? 'border-b border-black' : 'text-gray-500'}`} onClick={() => { setIndex(1) }} >SHIPPING INFO</li>
          <li className={`mr-[20px] tracking-widest cursor-pointer ${index === 2 ? 'border-b border-black' : 'text-gray-500'}`} onClick={() => { setIndex(2) }} >RETURN & WARRANTY</li>
        </ul>
        {index === 0 && <div>
          <p className='text-[14px] font-semibold my-[5px]'>Luna Cat Sneakers Anime Personalized Shoes MV1304</p>
          <p className='text-[14px] mb-[10px]'>All of our personalized shoes are custom-made-to-order and handcrafted to the highest quality standards</p>
          <ul className='pl-[20px] list-disc'>
            <li className='text-[14px]'><span className='font-semibold'>Premium quality materials:</span> soft and comfortable fabric, PU leather, mesh, and plastic patch upper with a high-quality rubber outsole.</li>
            <li className='text-[14px] my-[4px]'>Each pair of shoes is custom printed, cut, and sewn for a <span className='font-semibold'>unique and personalized product</span>. Due to the custom production process, there may be slight variations in the design on the seams, adding to the authenticity and individuality of each pair.</li>
            <li className='text-[14px]'>Comfortable fit: lace-up closure system, soft textile lining with sturdy construction, and <span className='font-semibold'> excellent support and stability for the feet.</span></li>
            <li className='text-[14px]'>Shipped with a box: all shoes are packaged and shipped with a box, ensuring they arrive in excellent condition.</li>
            <li className='text-[14px] font-semibold'>Designed by Gear Anime</li>
          </ul>
          <p className='text-[14px] mt-[10px]'>Please allow 10-15 business days to receive a tracking number while your order is hand-crafted, packaged and shipped from our facility. </p>
        </div>}
        {index === 1 && <div>
          <p className='text-[14px] mb-[4px]'>We shipped to these countries:</p>
          <p className='text-[14px] mb-[4px]'>United States, Canada, Malaysia, Philippines, Singapore, South Korea, Taiwan, Thailand, Austria, Belgium, Bulgaria, Croatia, France, Georgia, Germany, Greece, Iceland, Ireland, Italy,</p>
          <p className='text-[14px] mb-[4px]'>Lithuania, Luxembourg, Netherlands, Norway, Poland, Romania, Spain, Sweden, Switzerland, Turkey, United Kingdom, Australia, New Zealand, Israel, Costa Rica</p>
          <p className='text-[14px] mb-[4px] font-semibold'>Delivery Time = Processing time + Shipping time</p>
          <p className='text-[14px] mb-[4px]'>Processing Time: 10 – 15 business days (in regular seasons) or more depending on holiday seasons.</p>
          <p className='text-[14px] mb-[4px]'>Shipping time varies by location. These are our estimates:</p>
          <p className='text-[14px] mb-[4px] font-semibold'>United States: 1-2 Weeks</p>
          <p className='text-[14px] mb-[4px] font-semibold'>Canada, Europe: 2-4 Weeks</p>
          <p className='text-[14px] mb-[4px] font-semibold'>Australia, New Zealand: 2-4 Weeks</p>
          <p className='text-[14px] mb-[4px] font-semibold'>Mexico, Central America, South America: 2-4 Weeks</p>
          <p className='text-[14px] mb-[4px]'>View detail here: Shipping Policy</p>
        </div>}
        {index === 2 && <div>
          <p className='text-[14px] mb-[4px]'>RETURNS POLICY</p>
          <p className='text-[14px] mb-[4px]'>Please be reminded that Our policy <span className='font-semibold'>lasts 7</span> days from the date that you receive your product from us. If 7 days have gone by since the delivery of your purchase, we can't offer you a refund or exchange, unfortunately. We stand behind the quality of our products and guarantee our workmanship.<span className='font-semibold'> Any defects or errors on our part will result in a replacement at no charge.</span></p>
          <p className='text-[14px] mb-[4px]'>Due to all our products are made-to-order so we typically do not accept returns or exchanges due to user errors such as incorrect selection of sizes, designs, colors, etc.</p>
          <p className='text-[14px] mb-[4px]'>Please be informed that our products are customized and manufactured under market demand; thus, they are not always available items. Also, advertised images may be slightly different from the actual item in terms of color due to the lighting during photo shooting or the monitor's display. Hence,<span className='font-semibold'> please allow the 20% difference between the advertised images and the actual item you received.</span></p>
          <p className='text-[14px] mb-[4px]'>View detail here: refund and return policy</p>
        </div>}
      </div>
    </div>


  )
}

export default Products