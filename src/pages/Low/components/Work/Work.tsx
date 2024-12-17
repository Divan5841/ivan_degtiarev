import { FC } from 'react';

import { Link } from '@components/units';
import { Work } from '@services/Data';

import classes from './Work.module.scss';

interface Props {
  work: Work;
}

export const WorkBlock: FC<Props> = ({ work }) => (
  <div className={classes.box}>
    <div className={classes.info}>
      <Link to={work.title.link} open>
        <h2 className={classes.title}>{work.title.text}</h2>
      </Link>

      <p className={classes.description}>{work.description}</p>
    </div>

    <ul className={classes.list}>
      {work.list.map((item) => (
        <li key={item.text} className={classes.listItem}>
          <Link to={item.link} open>
            <p>{item.text}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
