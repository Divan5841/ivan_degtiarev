import { FC } from 'react';

import classes from '../Error.module.scss';

export const CommonErrorBlock: FC = () => (
  <div className={classes.content}>
    <div className={classes.text_box}>
      <p className={classes.title}>{'Something went wrong'}</p>
    </div>
  </div>
);
