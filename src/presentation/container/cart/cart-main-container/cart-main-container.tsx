//common
import { CONFIG } from "../../../../application/common/config"
//contexts
import { useCartContext } from "../../../../application/contexts/cart/cart-context"
//models
import { CartItem } from "../../../../application/models/cart/cart-item"
//components
import CartListContainer from "../cart-list-container/cart-list-container"
//styles
import { Wrapper, CartHeaderWrapper, CartPriceSummaryWrapper, CartDetailWrapper, CheckoutButton } from "./cart-main-container.styles"

const CartMainContainer = () => {

    const { cartItems, handleClearAllItems } = useCartContext();

    const getTotalItems = (items: CartItem[]) => 
        items.reduce((prev: number, cart) => prev + cart.quantity, 0);

    const getTotalAmount = (items: CartItem[]) => 
        items.reduce((prev: number, cart) => prev + (cart.item.unitPrice * cart.quantity), 0);

    return (
        <Wrapper>
            <CartHeaderWrapper>
                <span>{CONFIG.CART.TITLE}</span>
                <input type="button" onClick={() => handleClearAllItems()} value={CONFIG.CART.CLEAR_TITLE} />
            </CartHeaderWrapper>
            <CartListContainer />
            <CartPriceSummaryWrapper>
                <CartDetailWrapper>
                    <span>{CONFIG.CART.TOTAL_QTY_TITLE}</span>
                    <span>{getTotalItems(cartItems)}</span>
                </CartDetailWrapper>
                <CartDetailWrapper>
                    <span>{CONFIG.CART.TOTAL_AMOUNT_TITLE}</span>
                    <span>₱{getTotalAmount(cartItems).toFixed(2)}</span>
                </CartDetailWrapper>
                <CheckoutButton
                    onClick={() => alert("Thank you for purchasing")}
                    >{CONFIG.CART.PROCEED_CHECKOUT_TITLE}</CheckoutButton>
            </CartPriceSummaryWrapper>
        </Wrapper>
    )
}

export default CartMainContainer