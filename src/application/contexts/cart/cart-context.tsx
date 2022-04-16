import React, { useContext, useState } from "react"
import cartService from "../../../infrastructure/services/cart/cart.service";
import { CartItem } from "../../models/cart/cart-item";
import { ProductItem } from "../../models/product/product-item";

interface CartContextType {
    cartItems: CartItem[];
    handleAddToCart(clickedItem: ProductItem): void;
    handleSetItemQty(itemId: string, action: any, fixedQty?: number): void;
    handlRemoveItem(itemId: string): void;
    handleClearAllItems(): void;
}

const CartContext = React.createContext<CartContextType>({} as CartContextType);

export const useCartContext = () => {
    return useContext(CartContext);
}

export const CartProvider = ({ children } : any) => {

    // todo for refactoring, use object state instead, move methods to another file

    const [cartItems, setCartItems] = useState(cartService.getCartItems);

    const handleAddToCart = (clickedItem: ProductItem) => {
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

          return [newCartItem, ...prev];
      });
    };

    // todo: for refactor, use reducer instead
    const handleSetItemQty = (itemId: string, action: string, fixedQty?: number) => {
        setCartItems(prev => {

            switch (action) {
                case "increase": {
                    const itemModified = prev.map(cart => 
                        cart.item.id === itemId ? { ...cart, quantity: cart.quantity + 1 } : cart
                    )
                    
                    cartService.saveCartItems(itemModified); // save to local storage
      
                    return itemModified;
                }
                case "decrease": {

                    if(prev.find(cart => cart.item.id === itemId)?.quantity! <= 1)
                        return prev;

                    const itemModified = prev.map(cart => 
                        cart.item.id === itemId ? { ...cart, quantity: cart.quantity - 1 } : cart
                    )
                    
                    cartService.saveCartItems(itemModified); // save to local storage
      
                    return itemModified;
                }
                case "fixed": {
                    if(fixedQty! <= 0)
                        fixedQty = 1;

                    const itemModified = prev.map(cart => 
                        cart.item.id === itemId ? { ...cart, quantity: fixedQty! } : cart
                    )
                    
                    cartService.saveCartItems(itemModified); // save to local storage
      
                    return itemModified;
                }
                default:
                    return prev
            }
        });
    }

    const handlRemoveItem = (itemId: string) => {
        setCartItems(prev => {
            const updatedCartItems = prev.filter(prev => prev.item.id !== itemId);
            cartService.saveCartItems(updatedCartItems);

            return updatedCartItems
        });
    }

    const handleClearAllItems = () => {
        setCartItems([]);
        cartService.clearCartItems();
    }

    const value = {
      cartItems,
      handleAddToCart,
      handleSetItemQty,
      handlRemoveItem,
      handleClearAllItems
    }

    return (
        <CartContext.Provider value={value}>
            { children }
        </CartContext.Provider>
    );
}