import Cart from "../cart/index";
import * as Styles from "./styles";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserActionTypes from "../../redux/user/action-types";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);

  const dispatch = useDispatch();

  const handleLoginClick = () => {
    dispatch({
      type: UserActionTypes.LOGIN,
      payload: { name: "Felipe", email: "felipe@mail.com" },
    });
  };

  const handleLogoutClick = () => {
    dispatch({
      type: UserActionTypes.LOGOUT,
    });
  };

  console.log({ currentUser });

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
