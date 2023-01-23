import PropTypes from "prop-types"
import {Link} from "react-router-dom";
import styles from "./Movie.module.css"
import { useState } from "react";

function Movie({ id, coverImg, title, summary,  genres, index}) {
    const CNT = 4;
    return (
        <div className={styles.work__projects}>
        <Link className={styles.project} to={`/movie/${id}`}>
            <img className={styles.project__image} src={coverImg} alt={title}/>
            <div className={styles.project__description}>
                <h3>
                    {title} / {title}
                </h3>
                <span> {(summary).slice(0,150)} ...  </span>
            </div>
        </Link>
        </div>
    )
}

Movie.protoType = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie