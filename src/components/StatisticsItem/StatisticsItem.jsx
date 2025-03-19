import { IconContext } from 'react-icons';
import style from './StatisticsItem.module.css';

const StatisticsItem = ({ icon, title, total }) => {
  return (
    <>
      <IconContext.Provider value={{ color: '#29a14f', size: 30 }}>
        {icon}
      </IconContext.Provider>

      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
