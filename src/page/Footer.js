import React from 'react'
import { FacebookOutlined } from '@ant-design/icons'
import { TwitterOutlined } from '@ant-design/icons/lib/icons'
import { YoutubeOutlined } from '@ant-design/icons/lib/icons'
import { InstagramOutlined } from '@ant-design/icons/lib/icons'
// import './app.css'
const Footer=()=>{
    return(
        <div className='bg-[#001219] min-h-[400px] py-[80px] px-[10%] '>
            <div className='flex justify-between  border-b-[1px] border-white w-[100%] py-[5px]'>
                <div className='text-white'>
                    <h3>CONTACT US</h3>
                    <h4>THANG LONG UNIVERSITY</h4>
                    <h4>24/7 Customer Service!</h4>
                    <h4>support@gearanime.com</h4>
                    <h4>Stay Connected</h4>
                    

                </div>
                <ul className='text-white text_footer'>
                     <li className='font-[500] text-[16px]'>POLICIES</li>
                    <li>Privacy policy</li>
                    <li>Terms of Service</li>
                    <li>Shipping policy</li>
                    <li>Return & Refund policy</li>
                    <li>Payment Method</li>
                    <li>Cancellation & Exchange</li>
                    <li> DMCA Notice</li>
                </ul>
                <ul className='text-white text_footer'>
                     <li className='font-[500] text-[16px]'>SUPPORT</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Is Gear Anime Legit?</li>
                    <li>FAQs</li>
                    <li>All reviews</li>
                </ul>
                <ul className='text-white text_footer'>
                    <li className='font-[500] text-[16px]'>INFORMATION</li>
                    <li>Where Is My Order?</li>
                    <li>How to measure</li>
                    <li>support@gearanime.com</li>
                    <li>Promotions</li>
                    <li>Affiliate</li>
                    <li>The Official Gear Anime Store</li>
                </ul>

            </div>
            <div className='mt-[10px] flex justify-between'>
                <div>
                    <ul>
                    <FacebookOutlined 
                         className='text-white text-xl mx-[7px]'
                    />
                    <TwitterOutlined
                        className='text-white text-xl mx-[7px]' 
                     />
                     <YoutubeOutlined 
                      className='text-white text-xl mx-[7px]' 
                     />
                     <InstagramOutlined
                      className='text-white text-xl mx-[7px]' 
                      />
                    </ul>
                </div>
                <div>
                    <h4 className='text-white hover:underline'>DMCA Report</h4>
                </div>
            </div>
            <div>
                <p className='text-white flex justify-end text-xs mt-[5px]'>© 2023 GEAR ANIME. THE ART OF CUSTOM ANIME SHOES</p>
            </div>
        </div>
    )
}



export default Footer

