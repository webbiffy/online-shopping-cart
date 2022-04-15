import { useQuery } from "react-query";
import { ProductItem as Product } from "../../../../application/models/product/product-item";
import ProductItem from "../../../component/product-item/product-item";
import { Wrapper } from "./product-list-container.styles"

const getProductItems = async(): Promise<Product[]> =>
  await (await fetch('https://43199912-5c49-4a79-a8db-f187f1ac1971.mock.pstmn.io/products/items')).json();

const ProductListContainer = () => {
    const { data, isLoading, error } = useQuery<Product[]>(['products'], getProductItems);

    if (isLoading) return <div>Loading products...</div>
    if (error) return <div>Ooops... Something went wrong!</div>

    return (
        <Wrapper>
            {data!.map(item =>
                <ProductItem 
                    id={item.id} 
                    productName={item.productName} 
                    description={item.description} 
                    unitPrice={item.unitPrice} 
                    category={item.category} 
                    imageUrl={item.imageUrl}/>
                )}
        </Wrapper>
    )
}

export default ProductListContainer