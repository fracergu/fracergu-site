import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import logo from '../../assets/img/logo.svg'
import LanguageSelectorComponent from '../LanguageSelectorComponent/LanguageSelectorComponent'

import linkedin from '../../assets/img/linkedin.svg'
import github from '../../assets/img/github.svg'

export enum NavbarComponentTestIds {
  Container = 'navbar-component-container',
  Title = 'navbar-component-title',
  Logo = 'navbar-component-logo',
  Links = 'navbar-component-links'
}

const Container = styled.div`
  position: sticky;
  top: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: rgba(25, 25, 25, 0.8);
  backdrop-filter: blur(10px);
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: top;
    gap: 0.5em;
  }
`

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  & img {
    transition: all 1s ease;
    &:hover {
      transform: rotate(360deg);
    }
  }
`
const Title = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
`

const Logo = styled.img`
  width: 32px;
  transition: all 1s ease;
  &:hover {
    transform: rotate(360deg);
  }
`

const Links = styled.ul`
  display: flex;
  align-items: center;
  gap: 1em;
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: 500px) {
    margin: 0.5em 0 0;
  }
`

const NavbarLink = styled.li`
  & a {
    display: inline-block;
    text-decoration: none;
    transition: text-shadow 0.5s ease;
    color: #fff;
    &:visited {
      color: inherit;
    }
    &.active {
      font-weight: bolder;
      color: #1e90ff;
    }
    &:hover {
      text-shadow: 0 0 10px #1e90ff;
    }
  }
`

const LinkLogo = styled.img`
  filter: invert(99%) sepia(7%) saturate(65%) hue-rotate(195deg) brightness(118%) contrast(83%);
`

interface NavbarComponentProps {
  title: string
}

const NavbarComponent = ({ title }: NavbarComponentProps): JSX.Element => (
  <Container data-testid={NavbarComponentTestIds.Container}>
    <Brand>
      <Logo src={logo} alt="logo" data-testid={NavbarComponentTestIds.Logo} />
      <Title href="/" data-testid={NavbarComponentTestIds.Title}>
        {title}
      </Title>
    </Brand>
    <Links data-testid={NavbarComponentTestIds.Links}>
      <NavbarLink>
        <a href="https://www.linkedin.com/in/fcerdanguerrero/" target="_blank" rel="noreferrer">
          <LinkLogo src={linkedin} alt="linkedin" />
        </a>
      </NavbarLink>
      <NavbarLink>
        <a href="https://github.com/fracergu/" target="_blank" rel="noreferrer">
          <LinkLogo src={github} alt="github" />
        </a>
      </NavbarLink>
      <LanguageSelectorComponent />
    </Links>
  </Container>
)

export default NavbarComponent
