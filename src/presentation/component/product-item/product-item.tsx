import React from "react"
import { ProductItem as Product } from "../../../application/models/product/product-item"
import { Wrapper, Column, ProductImage, ProductName, ProductCategory, ProductUnitPrice, Button } from "./product-item.styles"

const ProductItem:React.FC<Product> = ({productName, description, unitPrice, category, imageUrl}) => {
    return (
        <Wrapper>
            <Column width="20%">
                <ProductImage src={imageUrl}></ProductImage>
            </Column>
            <Column width="60%">
                <ProductName>{productName}</ProductName>
                <ProductCategory>{category}</ProductCategory>
                <p>{description}</p>
            </Column>
            <Column width="20%">
                <ProductUnitPrice>₱{unitPrice}</ProductUnitPrice>
                <Button>Add to cart</Button>
            </Column>
        </Wrapper>
    )
}

export default ProductItem