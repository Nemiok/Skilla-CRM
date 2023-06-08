import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { lazy } from 'react'
import Layout from "./components/layout"
import { PAGE_ROUTES } from "./utils/objects"

const CallsPage = lazy(() => import('./pages/calls-page'));

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path={PAGE_ROUTES.CALLS} element={<CallsPage />} />
    <Route path={PAGE_ROUTES.MESSAGES} element={<h1>Страница не готова</h1>} />
    <Route path={PAGE_ROUTES.COUNTERAGENTS} element={<h1>Страница не готова</h1>} />
    <Route path={PAGE_ROUTES.DOCUMENTS} element={<h1>Страница не готова</h1>} />
    <Route path={PAGE_ROUTES.EXECUTORS} element={<h1>Страница не готова</h1>} />
    <Route path={PAGE_ROUTES.KNOWLEDGE} element={<h1>Страница не готова</h1>} />
    <Route path={PAGE_ROUTES.ORDERS} element={<h1>Страница не готова</h1>} />
    <Route path={PAGE_ROUTES.REPORTS} element={<h1>Страница не готова</h1>} />
    <Route path={PAGE_ROUTES.RESULTS} element={<h1>Страница не готова</h1>} />
    <Route path={PAGE_ROUTES.SETTINGS} element={<h1>Страница не готова</h1>} />
    <Route index element={<Navigate to={PAGE_ROUTES.CALLS} />} />

  </Route>
))

export default router