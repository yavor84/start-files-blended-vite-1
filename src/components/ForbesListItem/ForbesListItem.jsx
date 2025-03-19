import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';

import style from './ForbesListItem.module.css';

const ForbesListItem = ({ data }) => {
  return (
    <>
      <img className={style.avatar} src={data.avatar} alt={data.name} />
      <h3 className={style.title}>{data.name}</h3>
      <span className={style.capital}>
        {data.capital} <BiDollarCircle color="#2196f3" size={22} />
        {data.isIncrease ? <FcBearish /> : <FcBullish />}
      </span>
    </>
  );
};

export default ForbesListItem;
