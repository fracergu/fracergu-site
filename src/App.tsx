import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import NavbarComponent from './components/NavbarComponent/NavbarComponent'
import routes from './routes/routes'

function App(): JSX.Element {
  const Container = styled.div`
    margin: auto;
    padding: 1.5rem;
    max-width: 100ch;
  `

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent title="fracergu.dev" />
        <Container>
          <Routes>
            {routes.map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App
