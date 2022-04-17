import { CategoryItem } from "../../../application/models/product/category-item";


// todo: use api handler instead
export default {
    async getProductCategoryItems (): Promise<CategoryItem[]> {
        return await (await fetch('https://my-json-server.typicode.com/webbiffy/shopping-cart.github.io/categories')).json()
    }
}