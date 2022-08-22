import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  background-color: #7f004a;

  padding: 14.5px 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > section {
    display: flex;
    gap: 2rem;

    &:last-child {
      font-size: 1.5rem;
    }

    > img {
      width: 200px;

      @media (max-width: 500px) {
        width: 120px;
      }
    }

    > nav {
      display: flex;
      gap: 1.8rem;

      a {
        font-size: 18px;
        position: relative;

        &:before {
          content: '';
          border-radius: 50px;
          bottom: 0px;
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
    padding: 14.5px 16px;
  }
`
