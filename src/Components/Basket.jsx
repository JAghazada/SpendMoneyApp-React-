import React from 'react'
import './basket.css'
const Basket=({basket,total})=>{
    const css = {
        fontSize:'40px',
        color : '#ed2939'
    }
    return (
        <>
            {
                basket.map(items=>{
                    return <div className="h3 m-1 text-center"><h5>{items.title} x {items.amount} </h5><br /></div>
                })
            }
            <div style={css} className="text-center">Total Spended Money:{total}</div>
        </>
    )
}
export default Basket