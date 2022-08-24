import '../styles/SearchPage.css'
import { useState } from 'react'
import { Header } from '../components/Header/index'
import { MenuMobile } from '../components/MenuMobile'
import { HomeContainer } from '../styles/HomeStyles'
import { Busca } from '../components/Busca/Busca'

export function SearchPage() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <div className="searchPage ">
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <HomeContainer>
        <Header setMenuIsVisible={setMenuIsVisible} />
      </HomeContainer>
      <Busca />
    </div>
  )
}
