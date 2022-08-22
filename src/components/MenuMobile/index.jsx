import { Container } from "./styles";
import { X, InstagramLogo, FacebookLogo } from "phosphor-react";
import { useEffect } from "react";

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);
  return (
    <Container isVisible={menuIsVisible}>
      <X size={45} onClick={() => setMenuIsVisible(false)} />
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

        <a className="button" href="./login-page/login.html" target="_parent">
          CADASTRO
        </a>
        <section className="social-links">
          <InstagramLogo />
          <FacebookLogo />
        </section>
      </nav>
    </Container>
  );
}
