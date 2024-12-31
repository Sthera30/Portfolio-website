import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Layout from '../src/main_layouts/Layout.jsx'
import HomePage from './pages/HomePage.jsx';
import SkillsPage from './pages/SkillsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ContactPage from './pages/ContactsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx';
import CodingPages from './pages/CodingPages.jsx';
import SchoolPage from './pages/SchoolPage.jsx';
import CertificatePages from './pages/CertificatePages.jsx'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route path={'/'} element={<Layout />}>
     <Route index element={<HomePage />} />
     <Route path={'/skills'} element={<SkillsPage />} />
     <Route path={'/about-me'} element={<AboutPage />} />
     <Route path={'/certification'} element={<CertificatePages />} />
     <Route path={'/projects'} element={<ProjectsPage />} />
     <Route path={'/contact'} element={<ContactPage />} />
     <Route path={`/coding`} element={<CodingPages />} />
     <Route path={`/school`} element={<SchoolPage />} />
     <Route path={"*"}element={<NotFoundPage />} />
     </Route>
    )
  )

  return (
    <>
<RouterProvider router={router} />      
    </>
  );
}

export default App;
