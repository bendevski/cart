import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increase, remove, decrease} from './components/actions/actions';

class Cart extends Component{
    handleRemove = (id) => {
        this.props.remove(id);
    }

    handleDecrease = (id) => {
        this.props.decrease(id);
    }

    handleIncrease = (id) => {
        this.props.increase(id);
    }

    render(){
        if (!this.props.items.length){
            return(
                <div>
                    Empty Cart
                </div>
            )
        }
        else{
            var cartItems = this.props.items.map((item)=>{
                return(
                    <div className="Item">
                        <img src={item.img} alt={item.name}/>
                        {item.name}
                        {item.price}
                        <div className="Quant">
                            <button onClick={()=>this.handleDecrease(item.id)}>-</button>
                            {item.quantity}
                            <button onClick={()=>this.handleIncrease(item.id)}>+</button>
                        </div>
                        <button onClick={()=>this.remove(item.id)}>Remove</button>
                    </div>
                )
            })
        }
        return(
            <div className="Cart">
                {cartItems}
                {this.props.price}
            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        price: state.price
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        increase: (id)=>{dispatch(increase(id))},
        remove: (id) =>{dispatch(remove(id))},
        decrease: (id)=>{dispatch(decrease(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);