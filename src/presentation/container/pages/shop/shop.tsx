//styles
import { Wrapper } from './shop.styles'
//components
import ProductFilterContainer from '../../product/product-filter-container/product-filter-container'
import ProductMainContainer from '../../product/product-main-container/product-main-container';
import CartMainContainer from '../../cart/cart-main-container/cart-main-container';

export const Shop = () => {
    return (
      <Wrapper>
        <ProductFilterContainer></ProductFilterContainer>
        <ProductMainContainer></ProductMainContainer>
        <CartMainContainer></CartMainContainer>
      </Wrapper>
    );
  }