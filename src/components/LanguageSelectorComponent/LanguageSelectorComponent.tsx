import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import spain from '../../assets/img/spain.svg'
import uk from '../../assets/img/uk.svg'

export enum LanguageSelectorComponentTestIds {
  Container = 'LanguageSelectorComponentContainer',
  ImageButton = 'LanguageSelectorComponentImageButton'
}

const Container = styled.div``

const ImageButton = styled.img`
  width: 23px;
  height: 23px;
  object-fit: cover;
  border-radius: 50%;
  transition: all 1s ease;
  &:hover {
    cursor: pointer;
  }
`

const LanguageSelectorComponent = (): JSX.Element => {
  const { i18n } = useTranslation('', { useSuspense: false })

  const changeLanguageHandler = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <Container data-testid={LanguageSelectorComponentTestIds.Container}>
      <ImageButton
        data-testid={LanguageSelectorComponentTestIds.ImageButton}
        src={i18n.language === 'en' ? spain : uk}
        alt={i18n.language === 'en' ? 'es' : 'en'}
        onClick={() => changeLanguageHandler(i18n.language === 'en' ? 'es' : 'en')}
      />
    </Container>
  )
}

export default LanguageSelectorComponent
