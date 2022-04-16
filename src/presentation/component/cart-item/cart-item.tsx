import React from "react"
//models
import { CartItem as Cart } from "../../../application/models/cart/cart-item";
//styles
import { Wrapper, Column, ProductImage, 
    ProductName, ProductUnitPrice, ButtonQuantity,
    InputQuantity } from "./cart-item.styles"

interface CartItemProps {
    cart: Cart;
    handleSetQty(itemId: string, action: any, fixedQty?: number): void;
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
                        <ButtonQuantity 
                            onClick={() => handleSetQty(cart.item.id, "decrease")}>-</ButtonQuantity>
                        <InputQuantity 
                            type="number" 
                            onChange={(e) => handleSetQty(cart.item.id, "fixed", (e.target.value == "" ? 0 : parseInt(e.target.value)))} 
                            value={cart.quantity} />
                        <ButtonQuantity 
                            onClick={() => handleSetQty(cart.item.id, "increase")}>+</ButtonQuantity>
                    </div>
                </div>
            </Column>
        </Wrapper>
    )
}

export default CartItem