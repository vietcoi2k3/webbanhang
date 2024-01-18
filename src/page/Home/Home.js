import React, {useContext} from 'react'
import Carousel from './Carousel'
import FeaturedProducts from './FeaturedProducts'
import { AppContext } from '../../AppContext';
const BodyHome = () => {
  const { arrCollections } = useContext(AppContext)
  return (
    <div className='flex flex-col items-center mt-[88px]'>
      <div className='w-[100%]'>
        <Carousel />
      </div>
        {
          arrCollections.map((collection, id)=>(
            <FeaturedProducts nameCollection={collection.name} pathName={collection.pathName} key={id}/>
          )) 
        }
    </div>
  )
}

export default BodyHome