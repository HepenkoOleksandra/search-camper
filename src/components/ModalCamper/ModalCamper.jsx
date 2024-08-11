import css from './ModalCamper.module.css';

// import { Suspense, useEffect, useState } from "react";
// import { Link, Route, Routes, useParams } from "react-router-dom"
// import { apiGetCamperById } from "../../services/camperAPI";
// import Features from "../Features/Features";
// import Reviews from "../Reviews/Reviews";
// import Loader from "../Loader/Loader";

const ModalCamper = ({isOpen, onClose, camperCard}) => {
  // const { camperId } = useParams();
  // const [camperCard, setCamperCard] = useState(null);

  // useEffect(() => {

  //   async function fetchCamperCard() {
            
  //     try {
  //       const data = await apiGetCamperById(camperId);
  //       console.log(data);
  //       setCamperCard(data);
  //     } catch (error) {
  //       console.log(error);
  //     } 
    // }    
      
  //   fetchCamperCard();
  // }, [camperId]);

  return (
    <div className={css.containerModal}>
      <h1>ModalCamper</h1>
      
        <div>
            <ul className={css.containerImg}>
            <li className={css.imgCamper}>
              <img className={css.img} src={camperCard.gallery[0]} alt={camperCard.name} />
            </li>
            <li className={css.imgCamper}>
              <img className={css.img} src={camperCard.gallery[1]} alt={camperCard.name} />
            </li>
            <li className={css.imgCamper}>
              <img className={css.img} src={camperCard.gallery[2]} alt={camperCard.name} />
            </li>
           
            </ul>
        </div>
      
      {/* <div>
        <Link to='features'>Features</Link>
        <Link to='reviews'>Reviews</Link>
      </div>
      <Suspense fallback={<Loader/>}>
        <Routes >
          <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense> */}
    </div>
  )
}

export default ModalCamper