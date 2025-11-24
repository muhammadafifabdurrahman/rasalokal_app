// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/admin'
import Dashboard from './pages/admin';
import AdminUsers from './pages/admin/users';
import AdminCategories from './pages/admin/categories';
import AdminMenus from './pages/admin/menus';
import AdminTransactions from './pages/admin/transactions';
import CategoriesCreate from './pages/admin/categories/create';
import AdminOrders from './pages/admin/orders';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />}/>
            <Route path='users'>
              <Route index element={<AdminUsers />}/>
            </Route>
            <Route path='categories'>
              <Route index element={<AdminCategories />}/>
              <Route path='create' element={<CategoriesCreate />}/>
            </Route>
            <Route path='menus'>
              <Route index element={<AdminMenus />}/>
            </Route>
            <Route path='orders'>
              <Route index element={<AdminOrders />}/>
            </Route>
            <Route path='transactions'>
              <Route index element={<AdminTransactions />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
