// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/admin'
import Dashboard from './pages/admin';
import AdminUsers from './pages/admin/users';
import AdminCategories from './pages/admin/categories';
import AdminMenus from './pages/admin/menus';
import AdminPayments from './pages/admin/payments';
import CategoriesCreate from './pages/admin/categories/create';
import AdminOrders from './pages/admin/orders';
import MenusCreate from './pages/admin/menus/create';
import PaymentCreate from './pages/admin/payments/create';
import AdminOrdersItems from './pages/admin/order_items';


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
              <Route path='create' element={<MenusCreate />}/>
            </Route>
            <Route path='orders'>
              <Route index element={<AdminOrders />}/>
            </Route>
            <Route path='order_items'>
              <Route index element={<AdminOrdersItems />}/>
            </Route>
            <Route path='payments'>
              <Route index element={<AdminPayments />}/>
              <Route path='create' element={<PaymentCreate />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
