import css from "./Profile.module.css";
import PropTypes from "prop-types"


export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
    return (
        <div className={css.profile}>
           <div className={css.description}>
            <img
                src={avatar}
                alt={username}
                    className={css.avatar}
                    width="100px"
                   
            />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>{'@'+tag}</p>
            <p className={css.location}>{location}</p>
            </div>
            
             
            
            <ul className={css.statsList}>
            <li>
                <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{followers}</span>
            </li>
            <li>
                <span className={css.label}>Views</span>
                    <span className={css.quantity}>{views}</span>
            </li>
            <li>
                <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{likes}</span>
            </li>
        </ul>
        </div>

             

         
            
    )
};


Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape(
        {
            followers: PropTypes.number,
            views: PropTypes.number,
            likes: PropTypes.number
        })
};