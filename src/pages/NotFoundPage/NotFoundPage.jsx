import css from './NotFoundPage.module.css';

import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>This page does not exist</h1>
      <Link className={css.link} to='/'>Go Home</Link>
    </div>
  )
}

export default NotFoundPage