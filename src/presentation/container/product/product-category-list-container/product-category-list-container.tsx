import React from "react"
import { useQuery } from "react-query";
//common
import { CONFIG } from "../../../../application/common/config";
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

    const { filterByCategory, activeCategory, setActiveCategory } = useProductContext();

    const { data, isLoading, error } = useQuery<CategoryItem[]>(['productCategories'], productCategoryService.getProductCategoryItems);
    if (isLoading) return <div>Loading categories...</div>
    if (error) return <div>Ooops... Something went wrong!</div>

    const defaultItemCategory = {} as CategoryItem;
    defaultItemCategory.id = "000";
    defaultItemCategory.categoryName = CONFIG.SHOP.FILTER.DEFAULT_TITLE;

    return (
        <React.Fragment>
            <DefaultItem isActive={activeCategory === CONFIG.SHOP.FILTER.DEFAULT_TITLE}>
                <span onClick={() => {
                    setActiveCategory(CONFIG.SHOP.FILTER.DEFAULT_TITLE); 
                    filterByCategory(defaultItemCategory); 
                }}>
                    {defaultItemCategory.categoryName}
                </span>
            </DefaultItem>
            {data!.map(item =>
                <ProductCategoryItem 
                    key={item.id}
                    item={item}
                    activeCategory={activeCategory}
                    handleSetActiveCategory={setActiveCategory}
                    handleCategoryFilter={filterByCategory} />
                )}
        </React.Fragment>
    )
}

export default ProductCategoryListContainer