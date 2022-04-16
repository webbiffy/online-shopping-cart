import { ProductProvider } from '../application/contexts/product/product-context';
import { Header } from '../infrastructure/components/header/header'
import { Shop } from './container/pages/shop/shop'

const App = () => {
  return (
    <div className="App">
      <Header />
      <ProductProvider>
        <Shop />
      </ProductProvider>
    </div>
  );
}

export default App;
