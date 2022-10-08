import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Oders from './components/Oders/Oders';
import Shop from './components/Shop/Shop';
import Main from './Layout/Main';
import { ProductCart } from './Loaders/ProductCart';



function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:() => fetch('products.json'),
          element:<Shop></Shop>
        },
        {
          path:'/orders',
          loader:ProductCart, 
          element:<Oders></Oders>
        },
        {
          path:'/Inventory',
          element:<Inventory></Inventory>
        },
        {
          path:'/about',
          element:<About></About>
        }
      ]
    
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
