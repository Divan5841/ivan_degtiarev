import { WORKS } from '@services/Data';

import { WorkBlock } from '../Work/Work';
import classes from './Works.module.scss';

export const Works = () => (
  <div className={classes.mainBox}>
    <h1 className={classes.title}>{'Ivan Degtiarev, frontend'}</h1>

    <div className={classes.list}>
      {WORKS.map((work) => (
        <WorkBlock key={work.title.text} work={work} />
      ))}
    </div>

    <div className={classes.background} />
  </div>
);
