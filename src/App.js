import Products from './pages/Products.js';
import Basket from './pages/Basket.js';
import Product from './pages/Product.js';
import Registration from './pages/Registration.js';
import Authorization from './pages/Authorization.js';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';


function App() {

  const authorization = useSelector(state => state.users.authorization)

  return (
    <div>
      <Routes>
        {
          authorization === false
            ? <>
              <Route path='*' element={<Authorization/>}/>
              <Route path='/registration' element={<Registration/>}/>
            </>
            : <>
              <Route path='*' element={<Products/>}/>
              <Route path='/basket' element={<Basket/>}/>
              <Route path='*/:id' element={<Product/>}/>
            </>
        }
      </Routes>
  </div>
  )
}

export default App;
