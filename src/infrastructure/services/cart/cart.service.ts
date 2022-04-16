import { CartItem } from "../../../application/models/cart/cart-item";

export default {
    getCartItems () {
        const items = localStorage.getItem('cartItems');
        if (items === null) return [] as CartItem[];

        const cartItems = JSON.parse(items) as CartItem[];
        return cartItems;
    },
    saveCartItems(cartItems: CartItem[]) {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    },
    clearCartItems() {
        localStorage.removeItem('cartItems');
    }
}