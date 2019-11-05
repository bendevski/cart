export const addToCart = (id) =>{
    return{
        type: "ADD_TO_CART",
        id
    }
}
export const add = (id) =>{
    return{
        type: "ADD",
        id
    }
}
export const remove = (id) =>{
    return{
        type: "REMOVE",
        id
    }
}

export const increase = (id) =>{
    return{
        type: "INCREASE",
        id
    }
}

export const decrease = (id) =>{
    return{
        type: "DECREASE",
        id
    }
}