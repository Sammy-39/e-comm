
const getProductData = (state=[], action) => {
    switch(action.type){
        case "GET_ALL":
            return action.payload
        case "GET_BY_ID":
            return state.filter((_,idx)=>idx===action.payload)    
        default:
            return state
    }
}

export default getProductData