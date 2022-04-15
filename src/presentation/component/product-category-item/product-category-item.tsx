import React from "react"
import { CategoryItem } from "../../../application/models/product/category-item"
import { Wrapper } from "./product-category-item.styles"

const ProductCategoryItem:React.FC<CategoryItem> = ({categoryName}) => {
    return (
        <Wrapper>{categoryName}</Wrapper>
    )
}

export default ProductCategoryItem