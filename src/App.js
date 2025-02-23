import logo from './logo.svg';
import './App.css';
import ProductSearch from './components/ProductSearch';
import SearchStudent from './components/SearchStudent';
import ShoppingCartPage from './components/ShoppingCartPage';

function App() {
  return (
    <div>

      <SearchStudent />
      <ProductSearch />
      <ShoppingCartPage />
    </div>
  );
}

export default App;
