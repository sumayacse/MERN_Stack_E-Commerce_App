import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import  { ShopContext } from '../context/ShopContext'
import Title from './Title';
import Productitem from './Productitem';




const LatestCollection = () => {
   
    const { products } = useContext(ShopContext);
    const [ latestProducts,setLatestProducts ] = useState([])

    useEffect(()=>{
       setLatestProducts(products.slice(0,10));
    },[])

    // console.log(products);
    

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm  md:text-base text-gray-600'>
            Your next favorite outfit is here! Explore our newest drops, featuring must-have styles for every mood and moment. Limited stock—shop now!
            </p>
        </div>
      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            latestProducts.map((item,index)=>(
                <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
      </div>
      
    </div>
  )
}

export default LatestCollection
