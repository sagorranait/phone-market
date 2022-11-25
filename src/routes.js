import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorFound from "./components/ErrorFound";
import DashBoard from "./components/DashBoard";

const routes = createBrowserRouter([
   { 
      path: '/', 
      element: <App/>,
      children: [
         { index: true, element: <>home</> },
         { path: 'blogs', element: <>blogs</> },
         { path: 'login', element: <Login/> },
         { path: 'register', element: <Register/> },
         { path: '/category/:id', element: <>category</>},
         { 
            path: 'dashboard',
            element: <DashBoard/>,
            children: [
               { path: 'profile',  element: <>profile</> },
               // admin routes
               { path: 'admin/allSellers',  element: <>Sellers</> },
               { path: 'admin/allBuyers',  element: <>Buyers</> },
               { path: 'admin/allReportes',  element: <>allReportes</> },
               // seller routes
               { path: 'seller/products',  element: <>Products</> },
               { path: 'seller/addProduct',  element: <>Add Product</> },
               // buyer routes
               { path: 'buyer/orders', element: <>My Orders</> },
               { path: 'buyer/reporte',  element: <>My Reports</>}
            ]
         }
      ],
      errorElement: <ErrorFound/>
   },
 ]);

 export { routes }