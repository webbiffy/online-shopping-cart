import React from "react"
import { CategoryItem } from "../../../../application/models/product/category-item"
import ProductCategoryItem from "../../../component/product-category-item/product-category-item"
import { DefaultItem } from "./product-category-list-containe.styles"

const ProductCategoryListContainer = ({items}: {items: CategoryItem[]}) => {
    return (
        <React.Fragment>
            <DefaultItem>All Items</DefaultItem>
            {items.map(item =>
                <ProductCategoryItem 
                    id={item.id}
                    categoryName={item.categoryName} />
                )}
        </React.Fragment>
    )
}

export default ProductCategoryListContainer