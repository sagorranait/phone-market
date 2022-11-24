import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ErrorFound from "./components/ErrorFound";

const routes = createBrowserRouter([
   { 
      path: '/', 
      element: <App/>,
      children: [
         { index: true, element: <>home</> },
         { path: 'blogs', element: <>blogs</> },
         { path: 'login', element: <SignIn/> },
         { path: 'register', element: <SignUp/> },
         { path: '/category/:id', element: <>category</>},
         { 
            path: 'buyer',
            element: <>Buyers</>,
            children: [
               { path: 'orders', element: <>My Orders</> },
               { path: 'reporte',  element: <>My Reports</>}
            ]
         },
         { 
            path: 'seller',
            element: <>Seller</>,
            children: [
               { path: 'products',  element: <>Products</> },
               { path: 'addProduct',  element: <>Add Product</> }
            ]
         },
         { 
            path: 'admin',
            element: <>admin</>,
            children: [
               { path: 'allSellers',  element: <>Sellers</> },
               { path: 'allBuyers',  element: <>Buyers</> },
               { path: 'reported',  element: <>Reported</> }
            ]
         }
      ],
      errorElement: <ErrorFound/>
   },
 ]);

 export { routes }