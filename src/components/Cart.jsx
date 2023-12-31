import "./Cart.css";
import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons.jsx";

export function Cart() {
  const cartCheckboxId = useId();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          <li>
            <img src="https://picsum.photos/seed/1/64/64" alt="Product" />
            <div>
              <strong>Product 1</strong>
            </div>

            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
