import { useNavigate } from 'react-router-dom';
import {HiOutlinePresentationChartBar, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { IoCalendarOutline } from "react-icons/io5";

import css from './WaterСonsumptionTracker.module.css';

export default function WaterСonsumptionTracker() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signup');
  };
  return (
    <div className={css.container}>
      <h1 className={css.title}>Water consumption tracker</h1>
      <h2 className={css.subTitle}>Record daily water intake and track</h2>
      <p className={css.listTitle}>Tracker Benefits:</p>
      <ul className={css.listWraper}>
        <div className={css.wraper}><IoCalendarOutline className={css.icon} /> <li className={css.listItem}>Habit drive</li></div>
        <div className={css.wraper}><HiOutlinePresentationChartBar className={css.icon} /> <li className={css.listItem}>View statistics</li></div>
        <div className={css.wraper}><HiOutlineWrenchScrewdriver className={css.icon} /> <li className={css.listItem}>Personal rate setting</li></div>
      </ul>

      <button className={css.button} type="button" onClick={handleClick}>
        Try tracker
      </button>
    </div>
  );
}
