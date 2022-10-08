import { getShortedCart } from "../utilities/fakedb";

export const ProductCart = async() => {
    // get products
    const productsData  = await fetch('products.json');
    const products  = await productsData.json();
    //get cart
    const savedCart  = getShortedCart();
    //console.log('saveCart', products);
    const intialCart = [];
   for(const id in savedCart){
    const addedProduct  = products.find(product => product.id === id)
        if(addedProduct){
            const quantity  = savedCart[id];
        // console.log(id,quantity);
        addedProduct.quantity  = quantity;
        intialCart.push(addedProduct);
        }
   }

    return{ products:products, intialCart:intialCart};
    
};

