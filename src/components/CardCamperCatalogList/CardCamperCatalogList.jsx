import css from './CardCamperCatalogList.module.css'
import svg from '../../../public/symbol-defs.svg';
import { Link } from 'react-router-dom';

const CardCamperCatalogList = ({getCamperCard, openModal, handleLoadMore, campers}) => {
  return (
      <>
          <ul className={css.cardCamperContainer}>{campers.map((camper) => {
              return (
                  <li className={css.cardCamper} key={camper._id}>
                    <div className={css.imgCamper}>
                        <img className={css.img} src={camper.gallery[0]} alt={camper.name} />
                    </div>
                      <div className={css.containerInfo}>
                          <div className={css.containerInfoTop}>
                        <div className={css.containerNamePrice}>
                                <h2 className={css.name}>{camper.name}</h2>
                                <div className={css.containerPrice}>
                                  <p className={css.price}>€ {camper.price}</p>
                                  <button className={css.buttonHeart}>
                                      <svg className={css.svgHeart}>
                                        <use xlinkHref={svg + "#icon-heart"}></use>
                                    </svg> 
                                  </button>    
                                </div>
                        </div>
                            <div className={css.containerRatingLocation}>
                              <div className={css.containerRating}>
                                    <svg className={css.svgStar}>
                                        <use xlinkHref={svg + "#icon-rating"}></use>
                                  </svg>
                                  <p className={css.rating}>{camper.rating}({camper.reviews.length} Reviews)</p>
                              </div>  
                              <div className={css.containerLocation}>
                                  <svg className={css.svgLocation}>
                                  <use xlinkHref={svg + "#icon-map-pin"}></use>
                                  </svg>
                                  <p className={css.location}>{camper.location}</p>
                              </div>
                            </div>
                          </div>
                          
                          <p className={css.description}>{camper.description}</p>

                          <ul className={css.containerValues}>
                            <li className={css.value}>
                                <svg className={css.svgValue}>
                                  <use xlinkHref={svg + "#icon-adults"}></use>
                                </svg>
                                <p>{camper.adults} adults</p>
                            </li>
                            <li className={css.value}>
                                <svg className={css.svgValue}>
                                  <use xlinkHref={svg + "#icon-transmission"}></use>
                                </svg>
                                <p>{camper.transmission}</p>
                            </li>
                            <li className={css.value}>
                                <svg className={css.svgValue}>
                                  <use xlinkHref={svg + "#icon-engine"}></use>
                                </svg>
                                <p>{camper.engine}</p>
                            </li>
                            <li className={css.value}>
                                <svg className={css.svgValue}>
                                  <use xlinkHref={svg + "#icon-kitchen"}></use>
                                </svg>
                                <p>{camper.details.kitchen} kitchen</p>
                            </li>
                            <li className={css.value}>
                                <svg className={css.svgValue}>
                                  <use xlinkHref={svg + "#icon-beds"}></use>
                                </svg>
                                <p>{camper.details.beds} beds</p>
                            </li>
                            <li className={css.value}>
                                <svg className={css.svgValue}>
                                  <use xlinkHref={svg + "#icon-ac"}></use>
                                </svg>
                                <p>{camper.details.airConditioner} AC</p>     
                            </li>
                        </ul> 
                        {/* import { MdAir } from "react-icons/md";   */}
                          {/* import { FaWind } from "react-icons/fa"; */}
                          {/* import { BsWind } from "react-icons/bs"; */}
                    {/* <Link className={css.showBtn} to={`/campers/${camper._id}`}>Show more</Link> */}
                    <button
                      type='button'
                      className={css.showBtn}
                      onClick={() => {
                        getCamperCard(camper);
                        openModal();
                      }}>
                      Show more
                    </button>
                  </div>
              </li>)
          })}</ul>
      <button onClick={handleLoadMore} className={css.showBtn}>Load more</button>
      </>
  )
}

export default CardCamperCatalogList