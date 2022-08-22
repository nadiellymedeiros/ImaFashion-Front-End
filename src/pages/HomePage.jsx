import { About } from '../components/About/About'
import Footer from '../components/Footer/Footer'
import { Home } from '../components/Home/Home'
import '../styles/HomePage.css'
import { useState } from 'react'
import { Header } from '../components/Header/index'
import { MenuMobile } from '../components/MenuMobile'
import { HomeContainer } from '../styles/HomeStyles'

export function HomePage() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)
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
      <About />
      <Footer />
    </div>
  )
}
