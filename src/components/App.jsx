import { Routes, Route } from "react-router-dom"

import Theme from "../context/Theme"
import SharedLayout from "./SharedLayout/SharedLayout"
import Home from "../pages/Home"
import Favorite from "../pages/Favorite"
import Read from "../pages/Read"
import NotFound from "../pages/NotFound"

const App = () => {
  return (
    <Theme>
      <Routes>
        <Route path="/news-app/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/news-app/favorite" element={<Favorite />} />
          <Route path="/news-app/read" element={<Read />} />
          <Route path="*" element={<NotFound />} />
          </Route>        
      </Routes>
    </Theme>      
  )
}

export default App

