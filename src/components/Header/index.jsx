import { Link } from 'react-router-dom'
import { Container, TextLink } from './styles'

import logoImg from '../../assets/logo-dark.png'

import { MagnifyingGlass, ShoppingCart } from 'phosphor-react'
import { RiMenu3Fill } from 'react-icons/ri'

import { useContext } from 'react'
import { CartContext } from '../../context/CartContext/cartContext'

export function Header({ setMenuIsVisible }) {
  const { cart } = useContext(CartContext)

  return (
    <Container>
      <section>
        <Link to={`/`}>
          <img src={logoImg} width="200px" alt="Logo" />
        </Link>

        <nav>
          <a href="http://127.0.0.1:5173">Início</a>
          <a href="http://127.0.0.1:5173/#produtos">Produtos</a>
          <a href="http://127.0.0.1:5173/#quemSomos">Quem somos</a>
          <a href="http://127.0.0.1:5173/#newsletter">NewsLetter</a>
          <a href="http://127.0.0.1:5173/#contato">Contato</a>
        </nav>
      </section>

      <section>
        <Link to="carrinho">
          <ShoppingCart className="icon" />
          <TextLink>{cart?.length}</TextLink>
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
