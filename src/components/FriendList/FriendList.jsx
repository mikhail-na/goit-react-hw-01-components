import css from "./FriendList.module.css";
import PropTypes from 'prop-types';
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

PropTypes.FriendList = {
    friends: PropTypes.array
}