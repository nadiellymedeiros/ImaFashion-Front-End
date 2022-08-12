import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/login" element={<h1>login</h1>} />
      <Route path="/productPage" element={<h1>productPage</h1>} />
    </Routes>
  )
}
