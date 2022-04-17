//styles
import { Wrapper } from "./cart-list-container.styles"
//components
import CartItem from "../../../component/cart-item/cart-item";
//contexts
import { useCartContext } from "../../../../application/contexts/cart/cart-context";

const CartListContainer = () => {
    const { cartItems, handleSetItemQty, handlRemoveItem } = useCartContext();

    return (
        <Wrapper>
            {cartItems!.map(cart =>
                <CartItem 
                    key={cart.item.id}
                    cart={cart}
                    handleSetQty={handleSetItemQty}
                    handleRemoveItem={handlRemoveItem}
                    />
            )}
        </Wrapper>
    )
}

export default CartListContainer;