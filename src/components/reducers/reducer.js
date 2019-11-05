import Album from '../../images/album.jpg';
import Book from '../../images/book.jpg';
import Game from '../../images/game.jpeg';
import Me from '../../images/me.jpg';
import Mooncake from '../../images/mooncake.jpg';
import Movie from '../../images/movie.jpg';
import Pen from '../../images/pen.jpg';
import Sword from '../../images/sword.jpg';

const initial = {
    items:[
        {id:0,name:'Album',price:100,img:Album},
        {id:1,name:'Book',price:60,img:Book},
        {id:2,name:'Game',price:200,img:Game},
        {id:3,name:'Me',price:100000000,img:Me},
        {id:4,name:'Mooncake',price:10,img:Mooncake},
        {id:5,name:'Movie',price:200,img:Movie},
        {id:6,name:'Pen',price:20,img:Pen},
        {id:7,name:'Sword',price:1390,img:Sword},
    ],
    addedItems:[],
    price: 0,
}


const reducer = (state = initial, action)=>{
    if(action.type === "ADD_TO_CART"){
        let added = state.items.find(item=>item.id===action.id);
        if (state.addedItems.find(item=>action.id===item.id)){
            added.quantity+=1;
            return{
                ...state,
                price: state.price + added.price
            }
        }
        else{
            added.quantity = 1;
            return{
                ...state,
                addedItems: [...state.addedItems, added],
                price: state.price +added.price
            }
        }
    }
    if(action.type==="REMOVE"){
        let removed = state.addedItems.filter(item=>action.id !== item.id);
        let price = 0;
        removed.forEach(function(ele){price+=ele.price*ele.quantity},price)
        return{
            ...state,
            addedItems: removed,
            price: price
        }
    }
    if (action.type === "DECREASE"){
        let subbed = state.addedItems.find(item=>item.id===action.id);
        if (subbed.quantity===1){
            let removed = state.addedItems.filter(item=>action.id !== item.id);
            let price = 0;
            removed.forEach(function(ele){price+=ele.price*ele.quantity},price)
            return{
                ...state,
                addedItems: removed,
                price: price
            }
        }
        else{
            subbed.quantity -=1;
            return{
                ...state,
                price: state.price-subbed.price
            }
        }
    }
    if (action.type === "INCREASE"){
        let added = state.addedItems.find(item=>item.id===action.id);
        added.quantity +=1;
            return{
                ...state,
                price: state.price+added.price
            }
        
    }
    else{
        return state;
    }
}

export default reducer;