import { useState } from "react";

//styles
import { Wrapper } from "./cart-list-container.styles"
//services
import cartService from "../../../../infrastructure/services/cart/cart.service";
//components
import CartItem from "../../../component/cart-item/cart-item";
//contexts
import { useCartContext } from "../../../../application/contexts/cart/cart-context";

const CartListContainer = () => {
    const { cartItems, handleSetItemQty } = useCartContext();

    return (
        <Wrapper>
            {cartItems!.map(cart =>
                <CartItem 
                    key={cart.item.id}
                    cart={cart}
                    handleSetQty={handleSetItemQty}
                    handleRemoveItem={() => alert('test')}
                    />
            )}
        </Wrapper>
    )
}

export default CartListContainer;