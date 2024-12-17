import { WORKS } from '@services/Data';

import { Contacts } from '../Contacts/Contacts';
import { WorkBlock } from '../Work/Work';
import classes from './Layout.module.scss';

export const Layout = () => (
  <div className={classes.box}>
    <Contacts />

    <div className={classes.mainBox}>
      <h1 className={classes.title}>{'Ivan Degtiarev, frontend'}</h1>

      <div className={classes.list}>
        {WORKS.map((work) => (
          <WorkBlock key={work.title.text} work={work} />
        ))}
      </div>
    </div>

    <div />
  </div>
);
