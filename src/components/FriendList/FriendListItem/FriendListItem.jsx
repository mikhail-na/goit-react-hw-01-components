import css from "./FriendListItem.module.css";
import PropTypes from "prop-types";

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.item}>
            <span className={isOnline ? css.green : css.red}></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
};

PropTypes.FriendListItem = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
};