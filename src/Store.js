import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from './components/actions/actions'

class Store extends Component{
    constructor(props){
        super(props);
        this.state={
            qry: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({qry: event.target.value});
    }
    handleClick = (id)=>{
        this.props.addToCart(id);
    }
    render(){
        let selling = this.props.items.map(function(item){
            if (item.name.toUpperCase().includes(this.state.qry.toUpperCase())){
            return(
                <div className="Item">
                    <img src={item.img} alt={item.name}/>
                    {item.name}
                    {item.price}
                    <button onClick={()=>this.handleClick(item.id)}>Add to cart</button>
                </div>
            )
            }
            else return (null);
            }
        ,this)
        return(
            <div className="all">
                <input type="text" value={this.state.qry} onChange={this.handleChange}/>
                {selling}
            </div>
        )
    }

}


const mapStateToProps = (state)=>{
    return{items: state.items}
}

const mapDispatchToProps = (dispatch)=>{
    return{addToCart: (id)=>{dispatch(addToCart(id))}}
}

export default connect(mapStateToProps,mapDispatchToProps)(Store);