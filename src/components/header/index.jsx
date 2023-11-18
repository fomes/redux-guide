import Cart from "../cart/index";
import * as Styles from "./styles";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProductsCount } from "../../redux/cart/cart.selectors";
import { userLogin, userLogout } from "../../redux/user/slice";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);

  const dispatch = useDispatch();

  const handleLoginClick = () => {
    dispatch(userLogin({ name: "Felipe", email: "felipe@mail.com" }));
  };

  const productsCount = useSelector(selectProductsCount);

  const handleLogoutClick = () => {
    dispatch(userLogout());
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
