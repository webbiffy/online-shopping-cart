import ProductListContainer from "../product-list-container/product-list-container"
import { Wrapper, Content, Input } from "./product-main-container.styles"

const ProductMainContainer = () => {
    return (
        <Wrapper>
            <Content>
                <Input type="text" placeholder="Search Item"/>
                <ProductListContainer />
            </Content>
        </Wrapper>
    )
}

export default ProductMainContainer