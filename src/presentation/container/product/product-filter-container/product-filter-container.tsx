import { Wrapper } from './product-filter-container.styles'
import ProductCategoryListContainer from '../product-category-list-container/product-category-list-container'

const ProductFilterContainer = () => {
    return (
        <Wrapper>
            <ProductCategoryListContainer></ProductCategoryListContainer>
        </Wrapper>
    )
}

export default ProductFilterContainer