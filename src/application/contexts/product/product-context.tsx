import React, { useContext, useEffect, useState } from "react"
import { CategoryItem } from "../../models/product/category-item";
//models
import { ProductItem } from "../../models/product/product-item";

interface ProductContextType {
    productItems: ProductItem[];
    setProductItems: any;
    productItemsFiltered: ProductItem[];
    setProductItemsFiltered: any;
    filterByCategory(selectedCategory: CategoryItem): void;
}

const ProductContext = React.createContext<ProductContextType>({} as ProductContextType);

export const useProductContext = () => {
    return useContext(ProductContext);
}

export const ProductProvider = ({ children } : any) => {

    const [productItems, setProductItems] = useState([] as ProductItem[])
    const [productItemsFiltered, setProductItemsFiltered] = useState([] as ProductItem[])

    const filterByCategory = (selectedCategory: CategoryItem) => {
        setProductItemsFiltered(() => {
            if(selectedCategory.categoryName.toLowerCase() == "all items")
                return productItems;

            const filteredProducts = productItems.filter(product => product.category == selectedCategory.categoryName);
            return filteredProducts;
        });
    }

    const value = {
        productItems,
        setProductItems,
        productItemsFiltered,
        setProductItemsFiltered,
        filterByCategory
    }

    return (
        <ProductContext.Provider value={value}>{}
            { children }
        </ProductContext.Provider>
    );
}