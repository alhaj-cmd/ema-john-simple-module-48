import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getShortedCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const products  = useLoaderData(); 
    // const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    // useEffect( () =>{
    //     fetch('products.json')
    //     .then(res=> res.json())
    //     .then(data => setProducts(data))
    // }, []);

    useEffect ( () =>{
        const storedCart = getShortedCart;
        for (const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            console.log(addedProduct);
        }
    }, [])

    const handleAddToCart = (product) =>{
        //console.log(product);
        // do not do this: cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/orders'>
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;