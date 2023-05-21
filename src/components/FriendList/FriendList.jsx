import css from "./FriendList.module.css";
import PropTypes, { shape } from 'prop-types';
import { FriendListItem } from "./FriendListItem/FriendListItem";




export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
       
            {friends.map(({ avatar, isOnline, name, id }) => {
                return (
                    <FriendListItem
                        key={id}
                        isOnline={isOnline}
                        avatar={avatar}
                        name={name}
                    />
                );
            })}
          
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired
}