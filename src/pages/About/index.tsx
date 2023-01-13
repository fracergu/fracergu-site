import styled from 'styled-components'
import fracergu from '../../assets/img/fracergu.png'
import { Trans, useTranslation } from 'react-i18next'
import TechnologiesComponent from './TechnologiesComponent/TechnologiesComponent'
import react from '../../assets/img/react.png'
import typescript from '../../assets/img/typescript.png'
import angular from '../../assets/img/angular.png'
import javascript from '../../assets/img/javascript.png'

const About = (): JSX.Element => {
  const { t } = useTranslation()

  const calculateAge = (birthday: Date): number => {
    const ageDifMs = Date.now() - birthday.getTime()
    const ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  const PageTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    gap: 1em;
    & img {
      width: 300px;
      border-radius: 15px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
      transition: all 0.3s ease-in-out;
    }
    & h1 {
      font-size: 2.5rem;
      font-weight: 800;
      max-width: 40%;
      margin: 0;
      transition: all 0.3s ease-in-out;
      @media (max-width: 984px) {
        text-align: center;
        font-size: 2rem;
        max-width: 75%;
      }
    }
    & span {
      color: #1e90ff;
      text-shadow: 0 0 10px #1e8fff7c;
    }
    @media (max-width: 984px) {
      flex-direction: column;
    }
  `

  const TextBlock = styled.div`
    & a {
      color: #1e90ff;
      text-decoration: none;
      font-style: bolder;
      transition: all 0.3s ease-in-out;
      &:hover {
        text-shadow: 0 0 10px #1e90ff;
      }
      &:visited {
        color: #1e90ff;
        text-decoration: none;
      }
    }
    margin-top: 3rem;
  `

  const TechnologiesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;
  `

  return (
    <div>
      <PageTitle>
        <h1>
          <Trans t={t} i18nKey="pages.about.greeting">
            Hi! My name is <span> Francisco </span> and I&aposm a <span>frontend</span> developer.
          </Trans>
        </h1>
        <img src={fracergu} alt="Fracergu" />
      </PageTitle>
      <TextBlock>
        <h2>{t('pages.about.who-am-i.title')}</h2>
        <p>
          {t('pages.about.who-am-i.p1', {
            age: calculateAge(new Date(Date.parse('1990-07-13')))
          })}
        </p>
        <p>
          <Trans t={t} i18nKey="pages.about.who-am-i.p2">
            I&aposm currently working as a frontend developer at{' '}
            <a href="https://www.nomasystems.es" target="_blank" rel="noreferrer">
              Nomasystems
            </a>{' '}
            and I love learning new things and sharing knowledge.
          </Trans>
        </p>
      </TextBlock>
      <TextBlock>
        <h2>{t('pages.about.main-stack.title')}</h2>
        <TechnologiesContainer>
          <TechnologiesComponent name="JavaScript" imageSrc={javascript} />
          <TechnologiesComponent name="TypeScript" imageSrc={typescript} />
          <TechnologiesComponent name="Angular" imageSrc={angular} />
          <TechnologiesComponent name="React" imageSrc={react} />
        </TechnologiesContainer>
      </TextBlock>
      <TextBlock>
        <h2>{t('pages.about.what-do-i-do.title')}</h2>
        <p>{t('pages.about.what-do-i-do.p1')}</p>
      </TextBlock>
      <TextBlock>
        <h2>{t('pages.about.after-work.title')}</h2>
        <p>{t('pages.about.after-work.p1')}</p>
        <p>{t('pages.about.after-work.p2')}</p>
      </TextBlock>
    </div>
  )
}

export default About
