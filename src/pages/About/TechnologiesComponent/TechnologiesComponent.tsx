import styled from 'styled-components'

export enum TechnologiesComponentTestIds {
  Container = 'TechnologiesComponentContainer',
  Image = 'TechnologiesComponentImage'
}

const Container = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  & h3 {
    margin-top: 0.2em;
    margin-bottom: 0;
    text-align: center;
  }
`

const ImageContainer = styled.div`
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  max-height: 175px;
  margin: 0 auto;
  object-fit: contain;
  transition: all 0.3s ease;
  &:hover {
    transform: rotate(5deg);
  }
`

interface TechnologiesComponentProps {
  name: string
  imageSrc: string
}

const TechnologiesComponent = ({ name, imageSrc }: TechnologiesComponentProps): JSX.Element => (
  <Container data-testid={TechnologiesComponentTestIds.Container}>
    <ImageContainer>
      <Image data-testid={TechnologiesComponentTestIds.Image} src={imageSrc} alt={name} />
    </ImageContainer>
    <h3>{name}</h3>
  </Container>
)

export default TechnologiesComponent
