import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
import Products from './Pages/Products';
import Users from './Pages/Users';
import { AppProvider } from './ContextApi/ContextApi';
import Home from './Pages/Home';

function App() {
  
  return (
    <AppProvider>
    <div className="">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='users' element={<Users />} />
          <Route path='products' element={<Products />} />
        </Routes>
      </Router>
    </div>
    </AppProvider>
  );
}

export default App;
