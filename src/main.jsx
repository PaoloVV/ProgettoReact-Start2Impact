import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, createHashRouter } from 'react-router-dom'
import ErrorPage from './assets/pages/ErrorPage.jsx'
import RandomRecipes from './assets/components/RandomRecipes.jsx'
import AdvancedSearch from './assets/pages/AdvancedSearch.jsx'
import RecipeDetails from './assets/components/RecipeDetails.jsx'

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />}></ Route>
      <Route path='/random' element={<RandomRecipes />} />
      <Route path='/advanced' element={<AdvancedSearch />} />
      <Route path='/advanced/:id' element={<RecipeDetails />} />
      <Route path='*' element={<ErrorPage />}/>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
      <RouterProvider router = {router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
