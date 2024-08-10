import css from './CatalogCampersPage.module.css';

import { useEffect, useState } from "react"
import { apiGetAllCampers } from "../../services/camperAPI";
import CardCamperCatalogList from "../../components/CardCamperCatalogList/CardCamperCatalogList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SearchBox from "../../components/SearchBox/SearchBox";

const CatalogCampersPage = () => {
  const [campers, setCampers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {

    async function fetchCampers() {
      setIsError(false);
      setIsLoading(true);
      
      try {
        const data = await apiGetAllCampers();
        console.log(data);
        setCampers((prevCampers) => [...prevCampers, ...data]);
        //  setImages((prevImages) => [...prevImages, ...data.results]);
        // setShowBtn(data.total_pages > page);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }    
      
    fetchCampers();
  }, []);
  
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  }
 
  return (
      <div className={css.container}>
      
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <SearchBox/>
      {Array.isArray(campers) && <CardCamperCatalogList handleLoadMore={handleLoadMore} campers={campers}/>}
      </div>
  )
}

export default CatalogCampersPage