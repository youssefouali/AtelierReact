import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Navbar";
import "./App.css";
const Home = React.lazy(() => import("./components/Home"));
const Products = React.lazy(() => import("./components/Products"));
const ProductDetails = React.lazy(() => import("./components/ProductDetails"));

function App() {
  return (
    <>
      <Header></Header>
      <AppFrame className="App">
        <BrowserRouter basename="/">
          <Suspense fallback={<p>...Loading page please wait</p>}>
            <Routes>
              <Route
                path="/"
                exact
                render={(props) => <Home {...props} />}
              ></Route>
              <Route
                path="/products"
                render={(props) => <Products {...props} />}
              ></Route>
              <Route
                path="/products/:name"
                render={(props) => <ProductDetails {...props} />}
              ></Route>
              <Route exact render={() => <p>Product Not found!</p>}></Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AppFrame>
    </>
  );
}

const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export default App;
