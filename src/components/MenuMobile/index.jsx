import { Container } from './styles'
import { X, InstagramLogo, FacebookLogo } from 'phosphor-react'
import { useEffect } from 'react'

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
  }, [menuIsVisible])
  return (
    <Container isVisible={menuIsVisible}>
      <X size={45} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <a onclick="closeMenu()" href="http://127.0.0.1:5173">
          Início
        </a>
        <a onclick="closeMenu()" href="http://127.0.0.1:5173/#produtos">
          Produtos
        </a>
        <a onclick="closeMenu()" href="http://127.0.0.1:5173/#quemSomos">
          Quem somos
        </a>
        <a onclick="closeMenu()" href="http://127.0.0.1:5173/#newsletter">
          NewsLetter
        </a>
        <a onclick="closeMenu()" href="http://127.0.0.1:5173/#contato">
          Contato
        </a>

        <a className="button" href="./login">
          CADASTRO
        </a>
        <section className="social-links">
          <a href="https://instagram.com" target="_blank">
            <InstagramLogo />
          </a>
          <a href="https://facebook.com" target="_blank">
            <FacebookLogo />
          </a>
        </section>
      </nav>
    </Container>
  )
}
