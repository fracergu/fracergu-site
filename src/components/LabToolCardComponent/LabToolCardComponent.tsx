import styled from 'styled-components'
import { useCheckUrlStatus } from '../../hooks/checkContainerStatus'

export enum LabToolCardComponentTestIds {
  Card = 'LabToolCardComponentCard'
}

const Card = styled.a`
  width: fit-content;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  color: inherit;
  text-decoration: none;
  position: relative;
  padding: 0.25em 1em;
  gap: 1em;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  transition: all 0.5s;
  opacity: 0.5;
  pointer-events: none;
  z-index: 1;
  &.enabled {
    opacity: 1;
    pointer-events: all;
    cursor: pointer;
    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
`

const StatusBullet = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  transform: scale(1);
  box-shadow: 0 0 0 0 rgba(255, 0, 0, 1);
  background: #ff0000;
  &.alive {
    box-shadow: 0 0 0 0 rgba(0, 255, 0, 1);
    background: #00ff00;
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 255, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 255, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 255, 0, 0);
    }
  }
`

const Title = styled.h3`
  margin: 0;
  text-align: center;
`

type LabToolCardComponentProps = {
  url: string
  container: string
  children: React.ReactNode
}

const LabToolCardComponent = ({
  url,
  container,
  children
}: LabToolCardComponentProps): JSX.Element => {
  const { status } = useCheckUrlStatus(container)
  return (
    <Card
      data-testid={LabToolCardComponentTestIds.Card}
      className={status ? 'enabled' : ''}
      href={status ? url : ''}
      target="_blank"
      rel="noreferer">
      <StatusBullet className={status ? 'alive' : ''} />
      <Title>{children}</Title>
    </Card>
  )
}

export default LabToolCardComponent
