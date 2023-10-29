import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import classes from "./header.module.css";
import { useAuth } from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const { user, logout } = useAuth();

  const { cart } = useCart();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          <img
            className={classes.headerIcon}
            src="/icons/header_icon.png"
            alt="Logo"
          />
        </Link>
        <nav>
          <ul>
            {user ? (
              <li className={classes.menu_container}>
                <Link to="/dashboard">{user.name}</Link>
                <div className={classes.menu}>
                  <Link to="/profile">Thông tin cá nhân</Link>
                  <Link to="/orders">Đơn hàng</Link>
                  <a onClick={logout}>Đăng xuất</a>
                </div>
              </li>
            ) : (
              <Link to="/login">Đăng nhập</Link>
            )}

            <li>
              <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </li>
            <li>
              <div>
                {cart.totalCount > 0 && (
                  <span className={classes.cart_count}>{cart.totalCount}</span>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
