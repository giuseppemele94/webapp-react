//importo le pages
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"

//importo il layout di default
import DefaultLayout from "./layouts/DefaultLayout"

//importo componente per gestire le rotte
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Rotta padre: viene applicato default layout che conterrà sempre l'header, cioò che cambierà sarà il segnaposto outlet   */}
          <Route element={<DefaultLayout />}>
            {/* Route index: quando l'URL è "/" renderizza HomePage dentro il layout */}
            <Route index element={<HomePage />} />
            {/* Route dinamica: quando l'URL è "/movies/id" renderizza MoviePage dentro il layout */}
            <Route path="/movies/:id" element={<MoviePage />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
