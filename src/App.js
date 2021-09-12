import './App.css';
import {useState,useEffect} from 'react'
import Header from './Components/Header';
import Product from './Components/Product'
import products from './products.json'
import Basket from './Components/Basket';
function App() {
  const [money,setMoney] = useState(1000000)
  const [basket ,setBasket]  =useState([])
  const [total ,setTotal] = useState(0)
  const clearBasket=()=>{
    setBasket([])
}
  useEffect(()=>{
    const total  =  basket.reduce((acc,item) =>{
      return acc + item.amount * products.find(product=>product.id ===item.id).price
    },0)
    console.log(basket)
    setTotal(total)
})
  return (
    <div>
      <Header className="d-flex" money={money} total = {total}/>
      <div className="d-flex mt-3  justify-content-around">
      {products.map(
        
        product=>{
          return <Product  money={money} total={total} key={product.id} product={product} basket={basket} setBasket={setBasket}/>
        }
      )
      }
      </div>
      <Basket total={total} basket={basket}/>
      <div className="col-12 d-flex  justify-content-center">
        <button className='btn btn-danger'  onClick={clearBasket}>Clear Basket</button>

      </div>
    
    </div>
  );
}

export default App;
