//components
import ProductListContainer from "../product-list-container/product-list-container"
//styles
import { Wrapper, Content, Input } from "./product-main-container.styles"
//contexts
import { useProductContext } from "../../../../application/contexts/product/product-context"

const ProductMainContainer = () => {

    const { filterProduct, activeCategory } = useProductContext();

    return (
        <Wrapper>
            <Content>
                <Input 
                    type="text" 
                    placeholder="Search Item"
                    onChange={(e) => filterProduct(e.target.value, activeCategory)} />
                <ProductListContainer />
            </Content>
        </Wrapper>
    )
}

export default ProductMainContainer