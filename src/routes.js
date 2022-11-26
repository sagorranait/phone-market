import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorFound from "./components/ErrorFound";
import DashBoard from "./pages/DashBoard";
import Profile from "./pages/Profile";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Categoried from "./components/Category";
import SellerProducts from "./components/dashboard/SellerProducts";

const routes = createBrowserRouter([
   { 
      path: '/', 
      element: <App/>,
      children: [
         { index: true, element: <Home/> },
         { path: 'blogs', element: <Blogs/> },
         { path: 'login', element: <Login/> },
         { path: 'register', element: <Register/> },
         { 
            path: 'category', 
            element: <Category/>,
            children: [ 
               { path: 'all', element: <Categoried/> },
               { path: ':id', element: <Categoried/> } 
            ]
         },
         { 
            path: 'dashboard',
            element: <DashBoard/>,
            children: [
               { path: 'profile',  element: <Profile/> },
               // admin routes
               { path: 'admin/allSellers',  element: <>Sellers</> },
               { path: 'admin/allBuyers',  element: <>Buyers</> },
               { path: 'admin/allReportes',  element: <>allReportes</> },
               // seller routes
               { path: 'seller/products',  element: <SellerProducts/> },
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