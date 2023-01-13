import { render, screen } from '@testing-library/react'
import ProjectCardComponent, { ProjectCardComponentTestIds } from '../ProjectCardComponent'

describe('GIVEN ProjectCardComponent', () => {
  it('should render', () => {
    render(<ProjectCardComponent title="Mock" href="https://mock.mock" />)
    expect(screen.getByTestId(ProjectCardComponentTestIds.Card)).toBeTruthy()
  })
})
