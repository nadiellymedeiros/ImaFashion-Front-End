import { createContext } from 'react'

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const helloWorld = 'Hello World'

  return (
    <CartContext.Provider value={{ helloWorld }}>
      {children}
    </CartContext.Provider>
  )
}
