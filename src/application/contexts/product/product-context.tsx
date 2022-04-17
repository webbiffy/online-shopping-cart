import React, { useContext, useEffect, useState } from "react"
//common
import { CONFIG } from "../../common/config";
//models
import { ProductItem } from "../../models/product/product-item";
import { CategoryItem } from "../../models/product/category-item";

interface ProductContextType {
    productItems: ProductItem[];
    setProductItems: any;
    productItemsFiltered: ProductItem[];
    setProductItemsFiltered: any;
    activeCategory: string;

    filterByCategory(selectedCategory: CategoryItem): void;
    filterProduct(productName: string, categoryName: string): void;
    setActiveCategory: any;
}

const ProductContext = React.createContext<ProductContextType>({} as ProductContextType);

export const useProductContext = () => {
    return useContext(ProductContext);
}

export const ProductProvider = ({ children } : any) => {

    const [productItems, setProductItems] = useState([] as ProductItem[])
    const [productItemsFiltered, setProductItemsFiltered] = useState([] as ProductItem[])
    const [activeCategory, setActiveCategory] = useState(CONFIG.SHOP.FILTER.DEFAULT_TITLE)
    
    // todo: move and separate product filter to another file 
    const filterByCategory = (selectedCategory: CategoryItem) => {
        setProductItemsFiltered(() => {
            if(selectedCategory.category.toLowerCase() === CONFIG.SHOP.FILTER.DEFAULT_TITLE.toLowerCase())
                return productItems;

            const filtered = productItems.filter(product => product.category == selectedCategory.category);
            return filtered;
        });
    }

    // todo: filter combination, might need to use combinator design pattern
    const filterProduct = (productName: string, categoryName: string) => {
        setProductItemsFiltered(() => {

            const filtered = productItems.filter(product => product.productName.toLowerCase().includes(productName.toLowerCase())
                        && (categoryName.toLowerCase() === CONFIG.SHOP.FILTER.DEFAULT_TITLE.toLowerCase() || product.category.toLowerCase() === categoryName?.toLowerCase()));

            return filtered;
        });
    }

    const value = {
        productItems,
        setProductItems,
        productItemsFiltered,
        setProductItemsFiltered,
        filterByCategory,
        filterProduct,
        activeCategory,
        setActiveCategory
    }

    return (
        <ProductContext.Provider value={value}>{}
            { children }
        </ProductContext.Provider>
    );
}