import { ProductItem } from "../product/product-item";

export interface CartItem {
    item: ProductItem;
    quantity: number;
}