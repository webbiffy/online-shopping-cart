import React from "react"
import { ProductItem as Product } from "../../../application/models/product/product-item"
import { Wrapper, Column, ProductImage, ProductName, ProductCategory, ProductUnitPrice, Button } from "./product-item.styles"

interface ProductItemProps {
    item: Product;
    handleAddToCart(clickedItem: Product): void;
}

const ProductItem:React.FC<ProductItemProps> = ({item, handleAddToCart}) => {
    return (
        <Wrapper>
            <Column width="20%">
                <ProductImage src={item.imageUrl}></ProductImage>
            </Column>
            <Column width="60%">
                <ProductName>{item.productName}</ProductName>
                <ProductCategory>{item.category}</ProductCategory>
                <p>{item.description}</p>
            </Column>
            <Column width="20%">
                <ProductUnitPrice>₱{item.unitPrice}</ProductUnitPrice>
                <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
            </Column>
        </Wrapper>
    )
}

export default ProductItem