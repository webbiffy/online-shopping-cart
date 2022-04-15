import CartListContainer from "../cart-list-container/cart-list-container"
import { Wrapper, Title } from "./cart-main-container.styles"

const CartMainContainer = () => {
    return (
        <Wrapper>
            <Title>My Cart</Title>
            <CartListContainer />
        </Wrapper>
    )
}

export default CartMainContainer