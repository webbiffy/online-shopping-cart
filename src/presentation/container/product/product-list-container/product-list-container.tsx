import { useState } from "react";
import { useQuery } from "react-query";
//styles
import { Wrapper } from "./product-list-container.styles"
//models
import { CartItem } from "../../../../application/models/cart/cart-item";
import { ProductItem as Product } from "../../../../application/models/product/product-item";
//components
import ProductItem from "../../../component/product-item/product-item";
//services
import cartService from "../../../../infrastructure/services/cart/cart.service";

const getProductItems = async(): Promise<Product[]> =>
  await (await fetch('https://my-json-server.typicode.com/webbiffy/online-shopping-cart/products')).json();

const ProductListContainer = () => {
    const [cartItems, setCartItems] = useState(cartService.getCartItems)
    const { data, isLoading, error } = useQuery<Product[]>(['products'], getProductItems);

    const handleAddToCart = (clickedItem: Product) => {
        setCartItems(prev => {

            const isItemExistsInCart = prev.find(cart => cart.item.id === clickedItem.id);
            if (isItemExistsInCart) {
                const existingItem = prev.map(cart => 
                    cart.item.id === clickedItem.id 
                        ? { ...cart, quantity: cart.quantity + 1 } 
                        : cart
                )
                
                cartService.saveCartItems(existingItem); // save to local storage

                return existingItem;
            }

            let newCartItem = {} as CartItem;
            newCartItem.item = clickedItem;
            newCartItem.quantity = 1;
            
            cartService.saveCartItems([...prev, newCartItem]);  // save to local storage

            return [...prev, newCartItem];
        });
    };
    
    if (isLoading) return <div>Loading products...</div>
    if (error) return <div>Ooops... Something went wrong!</div>
    
    return (
        <Wrapper>
            {data!.map(item =>
                <ProductItem 
                    key={item.id}
                    item={item} 
                    handleAddToCart={handleAddToCart}/>
            )}
        </Wrapper>
    )
}

export default ProductListContainer