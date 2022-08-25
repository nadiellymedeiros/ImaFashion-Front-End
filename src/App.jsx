import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext/cartContext'
import { Router } from './Router'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Router />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
