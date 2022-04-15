import React from "react"
//models
import { CartItem as Cart } from "../../../application/models/cart/cart-item";
//styles
import { Wrapper, Column, ProductImage, 
    ProductName, ProductUnitPrice, ButtonQuantity,
    InputQuantity } from "./cart-item.styles"

interface CartItemProps {
    cart: Cart;
    handleSetQty(clickedItem: Cart): void;
    handleRemoveItem(clickedItem: Cart): void;
}

const CartItem:React.FC<CartItemProps> = ({cart, handleSetQty, handleRemoveItem}) => {
    return (
        <Wrapper>
            <Column width="20%">
                <ProductImage src={cart.item.imageUrl}></ProductImage>
            </Column>
            <Column width="80%">
                <ProductName>{cart.item.productName}</ProductName>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <ProductUnitPrice>₱{(cart.item.unitPrice * cart.quantity).toFixed(2)}</ProductUnitPrice>
                    </div>
                    <div>
                        <ButtonQuantity>-</ButtonQuantity>
                        <InputQuantity value={cart.quantity} />
                        <ButtonQuantity>+</ButtonQuantity>
                    </div>
                </div>
            </Column>
        </Wrapper>
    )
}

export default CartItem