import css from './CatalogCampersPage.module.css';

import { useEffect, useState } from "react"
import { apiGetAllCampers } from "../../services/camperAPI";
import CardCamperCatalogList from "../../components/CardCamperCatalogList/CardCamperCatalogList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SearchBox from "../../components/SearchBox/SearchBox";
import ModalCamper from '../../components/ModalCamper/ModalCamper';
import ModalBackdrop from '../../components/ModalBackdrop/ModalBackdrop';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/operations';

const CatalogCampersPage = () => {
  const campers = useSelector((state) => state.camper.campers );
  // console.log(campers);
  
  const filter = useSelector((state) => state.camper.filters);
  const loading = useSelector((state) => state.camper.loading);
  const error = useSelector((state) => state.camper.error);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [camperCard, setCamperCard] = useState(null);

 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch])
  
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  }

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const getCamperCard = (card) => {
    setCamperCard(card);
    console.log(card);
    
  }
 
  return (
      <div className={css.container}>
      
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <SearchBox/>
      {Array.isArray(campers) && <CardCamperCatalogList
        getCamperCard={getCamperCard}
        openModal={openModal}
        handleLoadMore={handleLoadMore}
        campers={campers} />}
      {camperCard !== null && (
        <ModalBackdrop onClose={closeModal}>
         <ModalCamper isOpen={isModalOpen}
        onClose={closeModal}
        camperCard={camperCard}/>
        </ModalBackdrop>
        )} 
      </div>
  )
}

export default CatalogCampersPage