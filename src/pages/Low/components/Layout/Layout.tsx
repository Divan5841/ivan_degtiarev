import { Contacts } from '../Contacts/Contacts';
import { Works } from '../Works/Works';
import { SplineViewer } from '../SplineViewer/SplineViewer';
import classes from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={classes.box}>
      <div className={classes.main}>
        <Contacts />

        <Works />

        <div />
      </div>

      <div className={classes.viewer}>
        <SplineViewer />
      </div>
    </div>
  );
};
