import clsx from 'clsx';
import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';
export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span
        className={clsx(css['isOnline'], {
          [css.online]: isOnline,
          [css.offline]: !isOnline,
        })}
      >
        {isOnline}
      </span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
