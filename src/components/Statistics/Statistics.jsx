import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import style from './Statistics.module.css';
import StatisticsItem from '../StatisticsItem/StatisticsItem';

const icons = [
  <FaRegThumbsUp key="0" />,
  <MdPeople key="1" />,
  <MdOutlineProductionQuantityLimits key="2" />,
  <GiTreeDoor key="3" />,
];

const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h3 className={style.title}>{title}</h3>}
      <ul className={style.list}>
        {stats.map(({ id, total, title }, index) => {
          return (
            <li className={style.item} key={id}>
              <StatisticsItem
                key={id}
                icon={icons[index]}
                title={title}
                total={total}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Statistics;
