import styled from "styled-components";
import Link from "next/link";

interface HeaderProps {
    active:string;
}

const HeaderContainer = styled.header`
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.colors.primary};

  img {
    padding: 0.4rem;
    max-width: 5rem;
    border-radius: 20px;
    transition: 200ms ease-in-out;

    &:hover {
        transform: translateY(-0.3rem)
    }
  }

  nav {
    display: flex;
    align-items: center;

    a {
      margin: 0 1rem;
      color: #fff;
      user-select: none;
      cursor: pointer;
      position: relative;
      text-decoration: none;

      transition: 700ms ease-in-out;

      &:hover {
        opacity: 0.9;
        letter-spacing: 1.4px;
      }

      &::before {
        content: "";

        height: 0.2rem;

        position: absolute;
        bottom: -10px;
        left: 0;
        right: 0;

        background: ${({ theme }) => theme.colors.secondary};

        transition: 700ms ease-in-out;
        opacity: 0;
        transform: translateX(2rem);
      }

      &:hover::before {
        opacity: 0.8;
        transform: translateX(0rem);
      }
    }

    .active {
      padding: 0.45rem;
      border: 0.1rem ${({ theme }) => theme.colors.secondary} solid;
    }
  }
`;

export default function Header({ active }: HeaderProps) {
  return (
    <HeaderContainer>
      <Link href="/">
        <a>
          <img src="/logo.png" alt="BrazilCSS" />
        </a>
      </Link>

      <nav>
        <Link href="/">
          <a className={active === "home" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/docs">
          <a className={active === "docs" ? "active" : ""}>Docs</a>
        </Link>
      </nav>
    </HeaderContainer>
  );
}
