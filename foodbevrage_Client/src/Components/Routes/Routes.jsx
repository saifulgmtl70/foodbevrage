import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import Login from "../Login/Login";
import Signup from "../SignUp/Signup";
import AddProduct from "../AddProduct/AddProduct";
import PrivateRotes from "./PrivateRotes";
import SeeBrand from "../Pages/Home/SeeBrand";
import Update from "../Pages/Update/Update";
import SeeDetails from "../Pages/Home/SeeDetails";
import Cart from "../Pages/Cart/Cart";
import PrivateRoutes from "./PrivateRotes";






const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },


        {
            path: '/brands/:brand',
            element: <PrivateRoutes> <SeeBrand></SeeBrand> </PrivateRoutes>,
            loader: () => fetch('https://foode-server-aeermtw0h-azadgmtls-projects.vercel.app/products')
        },

        {
            path: '/update/:id',
            element: <Update></Update>,
            loader: ({params}) => fetch(`https://foode-server-aeermtw0h-azadgmtls-projects.vercel.app/products/${params.id}`)
        },

        {
            path: '/details/:id',
            element: <SeeDetails></SeeDetails>,
        },

        {
            path: '/cart',
            element: <PrivateRotes> <Cart></Cart> </PrivateRotes>,
            loader: () => fetch('https://foode-server-aeermtw0h-azadgmtls-projects.vercel.app//cart')
        },
        
        {
            path: '/login',
            element: <Login></Login>
        },

        {
            path: '/signup',
            element: <Signup></Signup>
        },

        {
            path: '/addproduct',
            element: <PrivateRotes> <AddProduct></AddProduct> </PrivateRotes>
        },

      ]
    },
  ]);



export default router;
