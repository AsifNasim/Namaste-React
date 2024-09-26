import { useDispatch, useSelector } from "react-redux";
import MenuItemList from "./MenuItemList";
import { clearCart } from "../config/cartSlice";

const Cart =  () => {

    const dispatch = useDispatch();

    const emptyCart =  () => {
        dispatch(clearCart())
    }
    const cartItems = useSelector( (store) => store.cart.items);
    return (
        <div className="text-center m-4 p-4 ">
            <h1 className="text-lg font-bold">Cart Items</h1>
            <button className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={emptyCart}
            >Clear cart</button>

            {cartItems.length === 0 && <h1>Your cart is empty, please add some items</h1>}

            <div className="w-6/12 m-auto">
                <MenuItemList props={cartItems} />
            </div>

        </div>
    )
}

export default Cart;