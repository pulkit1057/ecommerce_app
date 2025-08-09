import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/SHopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0,10));
    },[])


  return (
    <div className='my-10'>

        <div className='text-center py-8 text-3xl'>
            <Title text1={"LATEST"} text2={"COLEECTIONS"}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illum repellat animi tempora perferendis, quae ducimus omnis maxime! Cupiditate architecto quisquam quo expedita, magnam labore dolor deleniti reprehenderit! Consequuntur, molestias.
            </p>
        </div>

        {/* {Rendering Products} */}

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((item,index)=>{
                    return <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
                })
            }
        </div>
      
    </div>
  )
}

export default LatestCollection
