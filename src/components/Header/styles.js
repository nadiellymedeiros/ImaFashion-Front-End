import styled from 'styled-components'

export const Container = styled.header`
  width: 100vw;
  background-color: var(--pink-700);

  padding: 15px 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--white);

  > section {
    display: flex;
    gap: 2rem;

    &:last-child {
      font-size: 1.5rem;
      cursor: pointer;
    }

    > img {
      width: 200px;

      @media (max-width: 500px) {
        width: 120px;
      }
    }

    > nav {
      display: flex;
      align-items: center;
      gap: 1.8rem;

      a {
        font-size: 18px;
        position: relative;
        text-decoration: none;
        color: var(--white);

        &:before {
          content: '';
          border-radius: 50px;
          bottom: -10px;
          position: absolute;
          width: 0%;
          height: 1.5px;
          background: white;
          transition: 0.25s;
        }

        &:hover {
          &:before {
            width: 100%;
          }
        }
      }
    }
    .mobile {
      display: none;
    }

    @media (max-width: 900px) {
      .mobile {
        display: initial;
      }
      > nav {
        display: none;
      }
    }
  }

  @media (max-width: 700px) {
    padding: 14.5px 30px;
  }
`
