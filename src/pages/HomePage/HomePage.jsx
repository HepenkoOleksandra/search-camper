import css from './HomePage.module.css';

import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className={css.backgroundImage}>
      <h1 className={css.homeTitle}>Your camper is waiting for you!</h1>
      <p className={css.description}>Do you love traveling through winding roads and scenic landscapes?
        Then you will understand the true beauty of being able to take your home with you wherever you go. And the camper will help you with this. Whether it's camping under the stars in a remote desert or parked by the beach where you fall asleep to the sound of the waves, a camper provides endless opportunities for exploration and discovery.
        Camper is your freedom and flexibility!</p>
      <Link className={css.link} to='/campers'>Here you can find your camper</Link>
    </div>
  )
}

export default HomePage