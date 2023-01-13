import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import NavbarComponent, { NavbarComponentTestIds } from '../NavbarComponent'
import { MemoryRouter } from 'react-router-dom'

describe('GIVEN: NavbarComponent', () => {
  const APP_NAME_MOCK = 'app-name-mock'
  const LOGO_SRC = '/src/assets/img/logo.svg'

  beforeEach(() => {
    render(
      <MemoryRouter>
        <NavbarComponent title={APP_NAME_MOCK} />
      </MemoryRouter>
    )
  })

  it('THEN: should render the component', () => {
    expect(screen.getByTestId(NavbarComponentTestIds.Container)).toBeDefined()
  })

  it('THEN: should render the title', () => {
    expect(screen.getByTestId(NavbarComponentTestIds.Title).textContent).toBe(APP_NAME_MOCK)
  })

  it('THEN: title shout href to root', () => {
    expect(screen.getByTestId(NavbarComponentTestIds.Title).getAttribute('href')).toBe('/')
  })

  it('THEN: should render the logo', () => {
    expect(screen.getByTestId(NavbarComponentTestIds.Logo)).toBeDefined()
  })

  it('THEN: logo should have the correct src', () => {
    expect(screen.getByTestId(NavbarComponentTestIds.Logo).getAttribute('src')).toBe(LOGO_SRC)
  })

  it('THEN: should render the links', () => {
    expect(screen.getByTestId(NavbarComponentTestIds.Links)).toBeDefined()
  })
})
