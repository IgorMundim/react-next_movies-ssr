import Link from 'next/link'
import styles from "./Header.module.css"
export const Nav = () => (
  
    <nav className={styles.header_navigation}>
        <ul className={styles.nav_menu}>
            <li className={styles.nav_menu__item}>
           
           
                <Link href="/" ><a className={styles.nav_menu__link}>HOME</a></Link>
      
            
            </li>
        </ul>
    </nav> 
)