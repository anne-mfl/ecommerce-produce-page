import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import ProductImage from './components/ProductImage';
import Contents from './components/Contents';


function App() {

  const [quantity, setQuantity] = useState(0)
  const [addedToCart, setAddedToCart] = useState(false)

  return (
    <div className="App">

      <Header
        quantity={quantity}
        setQuantity={setQuantity}
        addedToCart={addedToCart}
        setAddedToCart={setAddedToCart}
      />

      <div className='main'>
        <ProductImage />
        <Contents
          quantity={quantity}
          setQuantity={setQuantity}
          addedToCart={addedToCart}
          setAddedToCart={setAddedToCart}
        />
      </div>
    </div>
  );
}

export default App;
