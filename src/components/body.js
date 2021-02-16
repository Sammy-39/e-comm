import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import ProductCard from './product-card'
import ProductDetails from './product-details'
import { getAllProducts, getProductById } from '../actions/index'
import './body.css'


const Body = () =>{
    const [showProduct, setShowProduct] = useState(false)

    const ProductData = useSelector(state=>state)
    const dispatch = useDispatch()


    const handleClick = (id) =>{
        dispatch(getProductById(id))
        setShowProduct(true)
    }

    const handleGoBack = () =>{
        setShowProduct(false)
        dispatch(getAllProducts())
    }

    useEffect(()=>{
        dispatch(getAllProducts())
    },[])

    return(
        <div className='body container mt-5'>
            { 
                !showProduct && 
                ProductData.map((item,idx)=>(
                <ProductCard item={item} key={idx} clickItem={(id)=>handleClick(id)}/> ))
            }
            {
                showProduct && <ProductDetails goBack={handleGoBack} />
            }
        </div>
    )
}

export default Body