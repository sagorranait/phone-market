import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Login from "./pages/Login";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Category from "./pages/Category";
import DashBoard from "./pages/DashBoard";
import Categoried from "./components/Category";
import ErrorFound from "./components/ErrorFound";
import SellerProducts from "./components/dashboard/SellerProducts";
import BuyerOrders from "./components/dashboard/BuyerOrders";
import BuyerReportes from "./components/dashboard/BuyerReportes";
import AdminAllSellers from "./components/dashboard/AdminAllSellers";
import AdminAllBuyers from "./components/dashboard/AdminAllBuyers";
import AdminAllReportes from "./components/dashboard/AdminAllReportes";
import AddNewProduct from "./components/dashboard/AddNewProduct";

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
               // admin routes
               { path: 'admin/allSellers',  element: <AdminAllSellers/> },
               { path: 'admin/allBuyers',  element: <AdminAllBuyers/> },
               { path: 'admin/allReportes',  element: <AdminAllReportes/> },
               // seller routes
               { path: 'seller/products',  element: <SellerProducts/> },
               { path: 'seller/addProduct',  element: <AddNewProduct/> },
               // buyer routes
               { path: 'buyer/orders', element: <BuyerOrders/> },
               { path: 'buyer/reporte',  element: <BuyerReportes/>}
            ]
         }
      ],
      errorElement: <ErrorFound/>
   },
 ]);

 export { routes }