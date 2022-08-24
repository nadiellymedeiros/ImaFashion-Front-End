import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { Log } from './pages/LoginPage'
import { SearchPage } from './pages/SearchPage'
import ProductPage from './pages/ProductPage'
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/login" element={<Log />} />
      <Route path="/productPage/:id" element={<ProductPage />} />
      <Route path="/busca" element={<SearchPage />} />
      <Route path="/carrinho" element={<ShoppingCart/>} />
    </Routes>
  )
}
