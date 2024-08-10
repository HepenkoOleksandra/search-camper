import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetCamperById } from "../../services/camperAPI";


const Reviews = () => {
const { camperId } = useParams();
  const [camperCard, setCamperCard] = useState(null);

  useEffect(() => {

    async function fetchCamperCard() {
            
      try {
        const data = await apiGetCamperById(camperId);
        console.log(data);
        setCamperCard(data);
      } catch (error) {
        console.log(error);
      } 
    }    
      
    fetchCamperCard();
  }, [camperId]);

  return (
      <div>
          <h2>Reviews</h2>
          {camperCard !== null && (
              <div>
                  
              </div>
          )}
      </div>
  )
}

export default Reviews