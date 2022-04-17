import { ProductItem } from "../../../application/models/product/product-item";

//https://my-json-server.typicode.com/webbiffy/online-shopping-cart/products
//https://mocki.io/v1/313a10aa-7f33-405e-94fa-3940ab33bb96

// todo: use api handler instead
export default {
    async getProductItems (): Promise<ProductItem[]> {
        return await (await fetch('https://mocki.io/v1/313a10aa-7f33-405e-94fa-3940ab33bb96')).json()
    }
}