import Link from 'next/link'
import styles from './Collection.module.css'
export const MovieCarouselItem = ({movie}) =>  {
   
    const url = "https://image.tmdb.org/t/p/w500/"+movie.poster_path
    return(
    <li className={styles.movie_carousel__item} data-carousel="item">
            <Link href={`/movies/${movie.id}`}>
                <a className={styles.movie_carousel__link}>
                    <img className={styles.movie_carousel__cover} src={url} alt={movie.title} />
                </a>
            </Link>
    </li>

)}