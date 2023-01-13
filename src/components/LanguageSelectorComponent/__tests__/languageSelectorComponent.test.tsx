import { render, screen } from '@testing-library/react'
import LanguageSelectorComponent, {
  LanguageSelectorComponentTestIds
} from '../LanguageSelectorComponent'

describe('GIVEN LanguageSelectorComponent', () => {
  beforeEach(() => {
    render(<LanguageSelectorComponent />)
  })

  it('should render LanguageSelectorComponent', () => {
    expect(screen.getByTestId(LanguageSelectorComponentTestIds.Container)).toBeDefined()
  })
})
