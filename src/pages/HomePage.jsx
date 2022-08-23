import { About } from '../components/About/About'
import Footer from '../components/Footer/Footer'
import { Home } from '../components/Home/Home'
import '../styles/HomePage.css'
import { useState } from 'react'
import { Header } from '../components/Header/index'
import { MenuMobile } from '../components/MenuMobile'
import { HomeContainer } from '../styles/HomeStyles'
import Newletter from '../components/Newletter/Newletter'
import { Contato } from '../components/Contato/Contato'
import Produtos from '../components/Produtos/Produtos'
import { useProducts } from '../hooks/useProducts'

export function HomePage() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const produtos = useProducts()
  return (
    <div className="HomePage">
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <HomeContainer>
        <Header setMenuIsVisible={setMenuIsVisible} />
      </HomeContainer>
      <Home />
      <Produtos produtos={produtos} />
      <About />
      <Newletter />
      <Contato />
      <Footer />
    </div>
  )
}
