import { useState } from "react";

//styles
import { Wrapper } from "./cart-list-container.styles"
//services
import cartService from "../../../../infrastructure/services/cart/cart.service";
//components
import CartItem from "../../../component/cart-item/cart-item";

const CartListContainer = () => {
    const [cartItems, setCartItems] = useState(cartService.getCartItems)

    return (
        <Wrapper>
            {cartItems!.map(cart =>
                <CartItem 
                    key={cart.item.id}
                    cart={cart}
                    handleSetQty={() => alert('test')}
                    handleRemoveItem={() => alert('test')}
                    />
            )}
        </Wrapper>
    )
}

export default CartListContainer;