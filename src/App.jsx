import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ModalCamper from "./components/ModalCamper/ModalCamper";
import Navigation from "./components/Navigation/Navigation";
import './App.css'
import Loader from "./components/Loader/Loader";
// import HomePage from "./pages/HomePage/HomePage";
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// import CatalogCampersPage from "./pages/CatalogCampersPage/CatalogCampersPage";
const CatalogCampersPage = lazy(() => import('./pages/CatalogCampersPage/CatalogCampersPage'));
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
// import FavoriteCampersPage from "./pages/FavoriteCampersPage/FavoriteCampersPage";
const FavoriteCampersPage = lazy(() => import("./pages/FavoriteCampersPage/FavoriteCampersPage"));

function App() {
  
  return (
    <>
      <Navigation/>
      <main>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/campers" element={<CatalogCampersPage/>} />
            <Route path="/campers/:camperId/*" element={<ModalCamper/>} />
            <Route path="/favorite" element={<FavoriteCampersPage/>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </Suspense>
      </main>  
    </>
  )
}

export default App
