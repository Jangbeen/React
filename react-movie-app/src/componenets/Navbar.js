import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <nav>
            <ul>
                <li className={styles.logo}>MovieRating</li>
                <li className={styles.search}>
                    <input type="search" placeholder="Search for ..."></input>
                    <label className={styles.icon}>
                    <button>
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                    </label>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;