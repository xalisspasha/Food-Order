import React ,{useState} from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartProvider";

function App() {
  const [CartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const closeCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartContextProvider>
      <Header onShowCart={showCartHandler} />
      {CartIsShown && <Cart onCloseCart={closeCartHandler} />}
      <Meals />
    </CartContextProvider>
  );
}

export default App;
