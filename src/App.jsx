//importo le pages
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"
import NotFoundPage from "./pages/NotFoundPage"
//importo il layout di default
import DefaultLayout from "./layouts/DefaultLayout"

//import providel contesto globale
import { GlobalProvider } from "./GlobalContext"

//importo componente per gestire le rotte
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {


  return (
    <>
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          {/* Rotta padre: viene applicato default layout che conterrà sempre l'header, cioò che cambierà sarà il segnaposto outlet   */}
          <Route element={<DefaultLayout />}>
            {/* Route index: quando l'URL è "/" renderizza HomePage dentro il layout */}
            <Route index element={<HomePage />} />
            {/* Route dinamica: quando l'URL è "/movies/id" renderizza MoviePage dentro il layout */}
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
