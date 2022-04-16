import { useQuery } from "react-query";
//styles
import { Wrapper } from "./product-list-container.styles"
//models
import { ProductItem as Product } from "../../../../application/models/product/product-item";
//components
import ProductItem from "../../../component/product-item/product-item";
//contexts
import { useCartContext } from "../../../../application/contexts/cart/cart-context";
import { useProductContext } from "../../../../application/contexts/product/product-context";
//services
import productService from "../../../../infrastructure/services/product/product.service";
import { useEffect } from "react";

const ProductListContainer = () => {
    const { handleAddToCart } = useCartContext();
    const { productItemsFiltered, setProductItems, setProductItemsFiltered } = useProductContext();
    const { data, isLoading, error } = useQuery<Product[]>(['products'], productService.getProductItems);
    
    // initialize all product items
    useEffect(() => { 
        setProductItems(data);
        setProductItemsFiltered(data);
    }, [data]);

    if (isLoading) return <div>Loading products...</div>
    if (error) return <div>Ooops... Something went wrong!</div>
    
    return (
        <Wrapper>
            {productItemsFiltered?.map(item =>
                <ProductItem 
                    key={item.id}
                    item={item} 
                    handleAddToCart={handleAddToCart}/>
            )}
        </Wrapper>
    )
}

export default ProductListContainer