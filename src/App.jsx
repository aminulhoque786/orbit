import {
  createBrowserRouter,
  RouterProvider, Route,
  createRoutesFromElements
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Registration from "./pages/Registration";


let router = createBrowserRouter(createRoutesFromElements(

<Route  element={<Layout />} >
<Route index element={<Home />}  ></Route>
<Route path="/shop" element={<Shop />} />
<Route path="/shop/:id" element={<ProductDetails />} />
<Route path="/contact/" element={<Contact />} />
<Route path="/about/" element={<About />} />
<Route path="*" element={<Error />} />
<Route path="/cart" element={<Cart />} />
<Route path="/checkout" element={<Checkout />} />
<Route path="/login" element={<Login />} />
<Route path="/registration" element={<Registration />} />

</Route>

))


function App() {


  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
