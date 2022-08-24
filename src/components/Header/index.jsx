/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import { Container } from './styles'

import logoImg from '../../assets/logo-dark.png'

import { MagnifyingGlass, ShoppingCart } from 'phosphor-react'
import { RiMenu3Fill } from 'react-icons/ri'

export function Header({ setMenuIsVisible }) {
  return (
    <Container>
      <section>
        <img src={logoImg} alt="Logo" />
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
        </nav>
      </section>

      <section>
        <Link to="carrinho">
          <ShoppingCart className="icon" />
        </Link>

        <Link to="busca">
          <MagnifyingGlass className="icon" />
        </Link>

        <RiMenu3Fill
          onClick={() => setMenuIsVisible(true)}
          className="mobile"
        />
      </section>
    </Container>
  )
}
