import { Wrapper } from './product-filter-container.styles'
import ProductCategoryListContainer from '../product-category-list-container/product-category-list-container'
import { CategoryItem } from '../../../../application/models/product/category-item';
import { useQuery } from 'react-query';

const getProductCategories = async(): Promise<CategoryItem[]> =>
  await (await fetch('https://43199912-5c49-4a79-a8db-f187f1ac1971.mock.pstmn.io/products/categories')).json();

const ProductFilterContainer = () => {
    const { data, isLoading, error } = useQuery<CategoryItem[]>(['productCategories'], getProductCategories);

    if (isLoading) return <div>Loading categories...</div>
    if (error) return <div>Ooops... Something went wrong!</div>

    return (
        <Wrapper>
            <ProductCategoryListContainer items={data!}></ProductCategoryListContainer>
        </Wrapper>
    )
}

export default ProductFilterContainer