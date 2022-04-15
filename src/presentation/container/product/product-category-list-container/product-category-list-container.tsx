import React from "react"
import { useQuery } from "react-query";
import { CategoryItem } from "../../../../application/models/product/category-item"
import ProductCategoryItem from "../../../component/product-category-item/product-category-item"
import { DefaultItem } from "./product-category-list-containe.styles"

//postman - https://43199912-5c49-4a79-a8db-f187f1ac1971.mock.pstmn.io/products/categories
//json server - https://my-json-server.typicode.com/webbiffy/online-shopping-cart/categories
const getProductCategories = async(): Promise<CategoryItem[]> =>
  await (await fetch('https://my-json-server.typicode.com/webbiffy/online-shopping-cart/categories')).json();


const ProductCategoryListContainer = () => {

    const { data, isLoading, error } = useQuery<CategoryItem[]>(['productCategories'], getProductCategories);

    if (isLoading) return <div>Loading categories...</div>
    if (error) return <div>Ooops... Something went wrong!</div>

    return (
        <React.Fragment>
            <DefaultItem>All Items</DefaultItem>
            {data!.map(item =>
                <ProductCategoryItem 
                    key={item.id}
                    id={item.id}
                    categoryName={item.categoryName} />
                )}
        </React.Fragment>
    )
}

export default ProductCategoryListContainer