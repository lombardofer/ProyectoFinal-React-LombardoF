import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './componentes/inicio/HomeComponent.jsx';
import ProductsComponent from './componentes/products/ProductsComponent.jsx';
import ContactComponent from './componentes/contact/ContactComponent.jsx';
import NavBar from './componentes/navigation/NavBar.jsx';
import CategoryComponent from './componentes/categories/CategoryComponent.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <header>
          <h1 className='titulo'>La Matería Online</h1>
        </header>
        <Routes>
          <Route exact path="/" element={<HomeComponent />} />
          <Route exact path="/products" element={<ProductsComponent />} />
          <Route
            exact
            path="/category/:catName"
            element={<CategoryComponent />}
          />
          <Route exact path="/contact" element={<ContactComponent />} />
        </Routes>
      </BrowserRouter>

      
    </>
  );
}

export default App;
