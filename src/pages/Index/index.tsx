import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import LabToolCardComponent from '../../components/LabToolCardComponent/LabToolCardComponent'
import ProjectCardComponent from '../../components/ProjectCardComponent/ProjectCardComponent'

const ProjectCardComponentGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  grid-gap: 1em;
  @media (max-width: 698px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
`

const LabToolCardComponentGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  @media (max-width: 698px) {
    justify-content: center;
  }
`

const Title = styled.h1`
  transition: all 0.3s ease;
  @media (max-width: 698px) {
    text-align: center;
    font-size: 1.5em;
  }
`

const Index = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div>
      <Title>{t('pages.index.lab-tools.title')}</Title>
      <LabToolCardComponentGroup>
        <LabToolCardComponent url="https://git.fracergu.dev" container="gitea">
          Gitea
        </LabToolCardComponent>
        <LabToolCardComponent url="https://drone.fracergu.dev" container="drone">
          Drone
        </LabToolCardComponent>
        <LabToolCardComponent url="https://wiki.fracergu.dev" container="bookstack">
          Wiki
        </LabToolCardComponent>
      </LabToolCardComponentGroup>
      <Title>{t('pages.index.public-projects.title')}</Title>
      <ProjectCardComponentGroup>
        <ProjectCardComponent
          title={t('pages.index.public-projects.items.css-background-generator.title')}
          description={
            t('pages.index.public-projects.items.css-background-generator.description') || undefined
          }
          href="https://fracergu.github.io/css-plasma-background-generator/"
        />

        <ProjectCardComponent
          title={t('pages.index.public-projects.items.ngrx-express-boilerplate.title')}
          description={
            t('pages.index.public-projects.items.ngrx-express-boilerplate.description') || undefined
          }
          href="https://github.com/fracergu/ngrx-express-boilerplate"
        />

        <ProjectCardComponent
          title={t('pages.index.public-projects.items.vite-react-express.title')}
          description={
            t('pages.index.public-projects.items.vite-react-express.description') || undefined
          }
          href="https://github.com/fracergu/vite-react-express"
        />

        <ProjectCardComponent
          title={t('pages.index.public-projects.items.porkbun-ddns-updater.title')}
          description={
            t('pages.index.public-projects.items.porkbun-ddns-updater.description') || undefined
          }
          href="https://github.com/fracergu/porkbun-ddns-updater"
        />
        <ProjectCardComponent
          title={t('pages.index.public-projects.items.hik-script.title')}
          description={t('pages.index.public-projects.items.hik-script.description') || undefined}
          href="https://github.com/fracergu/HIKScript"
        />
      </ProjectCardComponentGroup>
    </div>
  )
}

export default Index
