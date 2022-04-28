import styles from './Collection.module.css'
import { MovieCarouselItem } from "./MovieCarouselItem"

export const Collection = ({movies}) => {

    return(
    <div className={styles.collection} data-carousel={styles.collection} data-id="${props.id}">
        <h3 className={styles.collection__title}>Filmes Populares</h3>
        <div className={styles.movie_carousel}>
        
            <ul className={styles.movie_carousel__list} data-carousel="list">
            { movies.map((movie,index) =>(
                        <MovieCarouselItem movie={movie} key={index}/>
                    ))}
            </ul>

    </div>
</div>
)}