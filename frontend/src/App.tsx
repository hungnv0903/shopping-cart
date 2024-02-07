import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import ReviewProduct from "./component/review/ReviewProduct";
import Checkout from "./component/checkout/CheckOut";
import Product from "./component/product/Product";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { path: "/products", element: <Product></Product>},
        { path: "/review", element: <ReviewProduct></ReviewProduct> },
        { path: "/checkout", element: <Checkout></Checkout> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
