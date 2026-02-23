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
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
