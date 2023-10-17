
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState, useEffect } from 'react';
import { decrease, increase } from './reducers/counterSlice';
import { fetchAllProduct } from './reducers/fetchProductSlice';

function App() {

  const products = useSelector(state=>{return state.productReducer.product})
  const counter = useSelector((state) => state.countReducer.counter);
  const isloading = useSelector(state=> state.productReducer.loading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [dispatch])

  
  const [number, setNumber] = useState(0);

  const onIncreaseHandler = () => {
    dispatch(increase(number))
  }

  const onDecreaseHandler = () => {
    dispatch(decrease(number))
  }

  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  }

  return (
    <div className='App'>
      <p className='counter'>Counter : {counter}</p>

      <div className='input'>
        <label>Input the number to add/subtract</label>
        <input type='number' defaultValue={0} onChange={(e) => onChangeHandler(e)} />
      </div>
      <div className='buttons'>
        <button className='button' onClick={onIncreaseHandler}>Increase</button>
        <button className='button' onClick={onDecreaseHandler}>Decrease</button>
      </div>

      
      <p style={{fontWeight: "600", fontSize: "22px", textAlign:"center"}}>Fetch Product</p>
        {isloading ? <div className='loading'>Loading....</div> : <div className='product'>
          {products.map(product=> <li key={product.id}>{product.title}</li>)}
          </div>}

    </div>
  );
}

export default App;
