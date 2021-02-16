import './product-card.css'

const ProductCard = ({item, clickItem}) =>{
    return(
        <div className="card" onClick={()=>clickItem(item.id)}>
            <div className="card-img">
                <img src={item.image} alt="product-image" height="320" width="265" />
            </div>
            <div className="card-content">
                <p className="pro-name"> {item.name} </p>
                <p className="pro-brand"> {item.brand} </p>
                <p className="pro-price"> {item.price}$ </p>
                <p> 
                    { [...Array(parseInt(item.rating)).keys()].map((_,idx)=>(
                        <span className="fas fa-star" key={idx}></span> ))
                    } 
                    {
                      parseInt(item.rating)!==item.rating && 
                        <span className="fas fa-star-half-alt"></span>
                    }
                </p>
            </div>
        </div>
    )
}

export default ProductCard