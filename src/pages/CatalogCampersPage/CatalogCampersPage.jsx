// import css from './CatalogCampersPage.module.css';

import { useEffect, useState } from "react"
import { apiGetAllCampers } from "../../services/camperAPI";
import CardCamperCatalogList from "../../components/CardCamperCatalogList/CardCamperCatalogList";

const CatalogCampersPage = () => {
    const [campers, setCampers] = useState([]);

    useEffect(() => {
        async function fetchCampers() {
            const data = await apiGetAllCampers();
            console.log(data);
            setCampers(data);
           
        }
        fetchCampers();
    }, []);
 
  return (
      <div>
          <h2>CatalogCampersPage</h2>
          <CardCamperCatalogList campers={campers}/>
      </div>
  )
}

export default CatalogCampersPage