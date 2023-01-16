import styled from 'styled-components'
import { useCheckUrlStatus } from '../../hooks/checkContainerStatus'

export enum ProjectCardComponentTestIds {
  Card = 'ProjectCardComponentCard'
}

interface ProjectCardComponentProps {
  href: string
  title: string
  description?: string
  showStatus?: boolean
}

const Card = styled.a`
  margin: 0;
  color: inherit;
  text-decoration: none;
  padding: 1rem;
  position: relative;
  display: block;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  transition: all 0.5s;
  opacity: 1;
  pointer-events: all;
  z-index: 1;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  &:visited {
    color: inherit;
  }
`
const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`

const Description = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`

const ProjectCardComponent = ({
  href,
  title,
  description,
  showStatus: showStatusBullet
}: ProjectCardComponentProps): JSX.Element => {
  let status = false

  if (showStatusBullet) {
    const { status: checkUrlStatus } = useCheckUrlStatus(href)
    status = checkUrlStatus
  }
  return (
    <Card
      data-testid={ProjectCardComponentTestIds.Card}
      href={href}
      target="_blank"
      rel="noreferer"
      className={status ? 'enabled' : ''}>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </Card>
  )
}

export default ProjectCardComponent
