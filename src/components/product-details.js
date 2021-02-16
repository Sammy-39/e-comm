import { useSelector } from "react-redux"

import './product-details.css'

const ProductDetails = (props) =>{
    const item = useSelector(state=>state[0])

    return(
        <div className="product-body">

            <i className="fas fa-arrow-left back-btn" onClick={props.goBack}></i>

            <img src={item.image} alt="product-image" height="350px" width="330px" />

            <div className="product-content">
                <div className="product-content-left">
                    <p className="pro-name"> {item.name} </p>
                    <p className="pro"> {item.brand} </p>
                    <p className="pro"> {item.description} </p>
                    <p className="pro"> In-Stock: {item.countInStock} </p>
                    <p className="pro-price"> {item.price}$ </p>
                    <p> 
                        { [...Array(parseInt(item.rating)).keys()].map((_,idx)=>(
                            <span className="fas fa-star" key={idx}></span> )) } 
                              
                        { parseInt(item.rating)!==item.rating && 
                            <span className="fas fa-star-half-alt"></span> }
                    </p>
                </div>

                <div className="product-content-right">
                    <button className="btn btn-warning"> Add to Cart </button>
                    <button className="btn btn-warning mt-2"> Buy </button>
                </div> 
            </div>
        </div>
    )
}

export default ProductDetails