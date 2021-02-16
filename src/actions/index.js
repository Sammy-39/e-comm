
export const getAllProducts = () => {
    return async dispatch => {
        var res = await fetch('https://e-comm-backend-app.herokuapp.com/api/products')
        var resData = await res.json()
        dispatch({
            type: "GET_ALL",
            payload: resData
        })
    }
}

export const getProductById = (id) =>{
    return{
        type: "GET_BY_ID",
        payload: id
    }
}

export const getCartItems = (cartItemIdList) =>{
    return{
        type: "GET_CART_ITEMS",
        payload: cartItemIdList
    }
}
