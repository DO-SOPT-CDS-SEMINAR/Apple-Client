import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import ShowIpadPage from './pages/ShowIpad';
import PurchasePage from './pages/Purchase/PurchasePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/ipad' element={<ShowIpadPage />} />
        <Route path='/shop-ipad' element={<PurchasePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
