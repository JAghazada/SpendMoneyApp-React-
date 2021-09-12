import React from 'react'
import './header.css'
const Header=({money,total})=>{
    return (
        <div className="header col-12 bg-warning d-flex justify-content-center align-items-center">
            {
                total > 0 && money-total !== 0 && (
                    <p  className="text-center">${money-total} you have! </p>
                ) 
                

            }
            {
                total===0 && (
                    <p  className="text-center">${money } you have for spending</p>
                )
            }
            {
                money-total === 0 && (
                    <p  className="text-center">You have not any monney. You can't buy anything</p>
                )
            }

        </div>
    )
}
export default Header
