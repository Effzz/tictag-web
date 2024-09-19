import { Route, Routes } from 'react-router-dom';

import ProductsPage from '../pages/products';
import SignInPage from '../pages/signin';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<SignInPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='*' element={<div className='flex justify-center items-center h-screen'>Page not found</div>} />
        </Routes>
    );
};

export default AppRoutes;
