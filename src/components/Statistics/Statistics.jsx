import css from "./Statistics.module.css";
import PropTypes, { shape } from "prop-types"
import getRandomHexColor from "./RandomColor";


export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}


            <ul className={css.statList}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li
                            key={id}
                            className={css.item}
                            style={{ backgroundColor: getRandomHexColor() }}
                        >
                            <span className={css.label} >{label}</span>
                            <span className={css.percentage}>{percentage + '%'}</span>
                        </li>
                    )
                })}
                
            </ul>
        </section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
        
    })).isRequired
};