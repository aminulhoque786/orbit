import {
  createBrowserRouter,
  RouterProvider, Route,
  createRoutesFromElements
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";


let router = createBrowserRouter(createRoutesFromElements(

<Route  element={<Layout />} >
<Route index element={<Home />}  ></Route>
<Route path="/shop" element={<Shop />} />
<Route path="/shop/:id" element={<ProductDetails />} />

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
