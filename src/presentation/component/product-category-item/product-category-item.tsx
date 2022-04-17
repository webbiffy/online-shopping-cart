import React from "react"
import { CategoryItem } from "../../../application/models/product/category-item"
import { Wrapper, CategoryLabel } from "./product-category-item.styles"

interface CategoryItemProps {
    item: CategoryItem;
    handleCategoryFilter(clickedItem: CategoryItem): void;
    activeCategory: string;
    handleSetActiveCategory: any;
}

const ProductCategoryItem:React.FC<CategoryItemProps> = ({item, handleCategoryFilter, activeCategory, handleSetActiveCategory}) => {
    return (
        <Wrapper>
            <CategoryLabel 
                isActive={activeCategory.toLowerCase() === item.category.toLowerCase()} 
                onClick={() => {
                    handleCategoryFilter(item);
                    handleSetActiveCategory(item.category)
                }}> 
                {item.category}
            </CategoryLabel>
        </Wrapper>
    )
}

export default ProductCategoryItem