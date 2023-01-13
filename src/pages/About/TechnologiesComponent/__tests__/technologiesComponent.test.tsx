import { render, screen } from '@testing-library/react'
import TechnologiesComponent, { TechnologiesComponentTestIds } from '../TechnologiesComponent'

describe('GIVEN TechnologiesComponent', () => {
  const MOCK_NAME = 'mock-name'
  const MOCK_IMAGE_SRC = 'mock-image-src'

  beforeEach(() => {
    render(<TechnologiesComponent name={MOCK_NAME} imageSrc={MOCK_IMAGE_SRC} />)
  })
  it('should render TechnologiesComponent', () => {
    expect(screen.getByTestId(TechnologiesComponentTestIds.Container)).toBeDefined()
  })
  it('should render TechnologiesComponent with name', () => {
    console.log(screen.getByTestId(TechnologiesComponentTestIds.Container).textContent)
    expect(screen.getByTestId(TechnologiesComponentTestIds.Container).textContent).toBe(MOCK_NAME)
  })
  it('should render TechnologiesComponent with image', () => {
    expect(
      screen.getByTestId(TechnologiesComponentTestIds.Container).querySelector('img')
    ).toBeDefined()
  })
  it('should render TechnologiesComponent with image with correct src', () => {
    expect(screen.getByTestId(TechnologiesComponentTestIds.Image).getAttribute('src')).toBe(
      MOCK_IMAGE_SRC
    )
  })
})
