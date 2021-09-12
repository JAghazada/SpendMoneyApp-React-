import { useEffect, useState } from "react"
function Product( {product,setBasket,basket,money,total} ) {
    const basketisEmpty = basket.find(item=>item.id===product.id)
    const buyProduct=()=>{
        if( basketisEmpty){ 
                basketisEmpty.amount +=1  
                setBasket([...basket.filter(item=>item.id !== product.id),basketisEmpty])
            }
        else{ setBasket([...basket,{
            title:product.title,
            id:product.id,
            amount :1

        }])}
        
    }
    
    const sellProduct = ()=>{
        const basketState = basket.find(item=>item.id === product.id)
        const basketEmpty = basket.filter(item=>item.id !== product.id)
        console.log('sss',basketState)
        console.log('eee',basketEmpty)
        basketState.amount -=1
        if(basketState.amount === 0 ){
            setBasket([...basketEmpty])
        }else{
            setBasket([...basketEmpty,basketState])
        }
    }
    
    return (
        <div>
        <div className="" >
            <div className="">
                <img src={product.img}  alt="" />
                <h5>{product.title}</h5>
                <h3 className="price">${product.price}</h3>
                <div className="actions">
                    <button className="btn btn-success btn-sell" disabled={!basketisEmpty} onClick={sellProduct} >Sell</button>
                    <span className="amount">{basketisEmpty && basketisEmpty.amount || 0 }</span>
                    <button className="btn btn-success btn-buy" disabled={total + product.price > money} onClick={buyProduct}>Buy</button>
                </div>    
            </div>
            
        </div>
        </div>
    )
}

export default Product
