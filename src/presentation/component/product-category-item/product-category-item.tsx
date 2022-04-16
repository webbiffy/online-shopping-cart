import React from "react"
import { CategoryItem } from "../../../application/models/product/category-item"
import { Wrapper, CategoryLabel } from "./product-category-item.styles"

interface CategoryItemProps {
    item: CategoryItem;
    handleCategoryFilter(clickedItem: CategoryItem): void;
}

const ProductCategoryItem:React.FC<CategoryItemProps> = ({item, handleCategoryFilter}) => {
    return (
        <Wrapper>
            <CategoryLabel onClick={() => handleCategoryFilter(item)}> 
                {item.categoryName}
            </CategoryLabel>
        </Wrapper>
    )
}

export default ProductCategoryItem