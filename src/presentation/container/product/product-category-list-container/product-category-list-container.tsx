import React from "react"
import { useQuery } from "react-query";
//contexts
import { useProductContext } from "../../../../application/contexts/product/product-context";
//models
import { CategoryItem } from "../../../../application/models/product/category-item"
//services
import productCategoryService from "../../../../infrastructure/services/product/product-category.service";
//components
import ProductCategoryItem from "../../../component/product-category-item/product-category-item"
//styles
import { DefaultItem } from "./product-category-list-containe.styles"

const ProductCategoryListContainer = () => {

    const { filterByCategory } = useProductContext();

    const { data, isLoading, error } = useQuery<CategoryItem[]>(['productCategories'], productCategoryService.getProductCategoryItems);
    if (isLoading) return <div>Loading categories...</div>
    if (error) return <div>Ooops... Something went wrong!</div>

    const defaultItemCategory = {} as CategoryItem;
    defaultItemCategory.id = "000";
    defaultItemCategory.categoryName = "All Items";

    return (
        <React.Fragment>
            <DefaultItem>
                <span 
                    style={{cursor: 'pointer'}}
                    onClick={() => filterByCategory(defaultItemCategory)}>{defaultItemCategory.categoryName}</span>
            </DefaultItem>
            {data!.map(item =>
                <ProductCategoryItem 
                    key={item.id}
                    item={item} 
                    handleCategoryFilter={filterByCategory} />
                )}
        </React.Fragment>
    )
}

export default ProductCategoryListContainer