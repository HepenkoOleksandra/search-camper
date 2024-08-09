import { Routes, Route, NavLink } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage/HomePage";
import CatalogCampersPage from "./pages/CatalogCampersPage/CatalogCampersPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import FavoriteCampersPage from "./pages/FavoriteCampersPage/FavoriteCampersPage";
import ModalCamper from "./components/ModalCamper/ModalCamper";

function App() {
  
  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/campers'>Catalog</NavLink>
        <NavLink to='/favorite'>Favorite</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/campers" element={<CatalogCampersPage/>} />
        <Route path="/campers/:camperId/*" element={<ModalCamper/>} />
        <Route path="/favorite" element={<FavoriteCampersPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>    
    </div>
  )
}

export default App
