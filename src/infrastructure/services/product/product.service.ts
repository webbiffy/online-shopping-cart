import { ProductItem } from "../../../application/models/product/product-item";

// todo: use api handler instead
export default {
    async getProductItems (): Promise<ProductItem[]> {
        return await (await fetch('https://my-json-server.typicode.com/webbiffy/online-shopping-cart/products')).json()
    }
}