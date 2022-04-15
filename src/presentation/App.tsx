import { Header } from '../infrastructure/components/header/header'
import { Shop } from './container/pages/shop/shop'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Shop />
    </div>
  );
}

export default App;
