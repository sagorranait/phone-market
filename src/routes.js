import { createBrowserRouter } from "react-router-dom";

import App from "./App";

const routes = createBrowserRouter([
   { 
      path: '/', 
      element: <App/>,
      children: [
         { index: true, element: <>home</> },
         { path: 'blogs', element: <>blogs</> },
         { path: 'login', element: <>login</> },
         { path: 'register', element: <>register</> },
         { path: '/category/:id', element: <>category</>},
         { 
            path: 'buyer',
            element: <>Buyers</>,
            children: [
               {
                  path: 'orders', 
                  element: <>My Orders</>
               },
               {
                  path: 'reporte', 
                  element: <>My Reports</>
               }
            ]
         },
         { 
            path: 'seller',
            element: <>Seller</>,
            children: [
               {
                  path: 'products', 
                  element: <>Products</>
               },
               {
                  path: 'addProduct', 
                  element: <>Add Product</>
               }
            ]
         },
         { 
            path: 'admin',
            element: <>admin</>,
            children: [
               {
                  path: 'allSellers', 
                  element: <>Sellers</>
               },
               {
                  path: 'allBuyers', 
                  element: <>Buyers</>
               },
               {
                  path: 'reported', 
                  element: <>Reported</>
               }
            ]
         }
      ],
      errorElement: <>error</>
   },
 ]);

 export { routes }