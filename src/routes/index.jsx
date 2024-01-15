import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from '../pages'

export const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' exect element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}