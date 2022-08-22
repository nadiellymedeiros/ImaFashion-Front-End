/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from "./styles";

import logoImg from "../../assets/logo-dark.png";

import { MagnifyingGlass, ShoppingCart } from "phosphor-react";
import { RiMenu3Fill } from "react-icons/ri";

export function Header({ setMenuIsVisible }) {
  return (
    <Container>
      <section>
        <img src={logoImg} alt="Logo" />
        <nav>
          <a onclick="closeMenu()" href="index.html">
            Início
          </a>
          <a onclick="closeMenu()" href="#products">
            Produtos
          </a>
          <a onclick="closeMenu()" href="#about">
            Quem somos
          </a>
          <a onclick="closeMenu()" href="#newsletter">
            NewsLetter
          </a>
          <a onclick="closeMenu()" href="#contact">
            Contato
          </a>
        </nav>
      </section>

      <section>
        <ShoppingCart />
        <MagnifyingGlass />
        <RiMenu3Fill
          onClick={() => setMenuIsVisible(true)}
          className="mobile"
        />
      </section>
    </Container>
  );
}
