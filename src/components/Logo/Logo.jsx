import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectIsLoggedIn } from '../../redux/auth/authSelectors.jsx';

import css from './Logo.module.css';

const Logo = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const handleWaterTrackerClick = () => {
    if (isLoggedIn) {
      navigate('/homepage');
    } else {
      navigate('/welcome');
    }
  };

  return (
    <nav className={css.nav}>
      <button className={css.title} onClick={handleWaterTrackerClick}>
        <svg className={css.icon}>
          <use href="../src/assets/img/icons.svg#icon-logo" />
        </svg>
      </button>
    </nav>
  );
};

export default Logo;
