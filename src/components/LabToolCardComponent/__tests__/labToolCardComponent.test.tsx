import { render, screen } from '@testing-library/react'
import LabToolCardComponent, { LabToolCardComponentTestIds } from '../LabToolCardComponent'

describe('GIVEN LabToolCardComponent', () => {
  it('should render', () => {
    render(
      <LabToolCardComponent url="https://mock.mock" container="mock-container">
        Mock
      </LabToolCardComponent>
    )
    expect(screen.getByTestId(LabToolCardComponentTestIds.Card)).toBeTruthy()
  })
})
