import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem'
import {removeFromDb,deleteShoppingCart} from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
//import { addToDb, deleteShoppingCart, getShortedCart } from '../../utilities/fakedb';


const Oders = () => {
    const {products, intialCart} = useLoaderData();
   //console.log(products, intialCart);
   const [cart, setCart] = useState(intialCart);

   const handleRemoveItem = (id) => {
    const remaining  = cart.filter(product => product.id !==id);
    setCart(remaining);
    removeFromDb(id);

   }

    
   const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
}



    return (
        <div className='shop-container'>
            <div className='oders-container'>
                {
                cart.map(product =><ReviewItem
                key={product.id}
                product={product}
                handleRemoveItem ={handleRemoveItem}
                ></ReviewItem>)
                },
                {
                    cart.length=== 0 && <h2>NO Items for Review please <Link to="/">Shop more..
                    </Link> </h2>
                }

            </div>
            <div className="cart-container">
              <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Oders;