import { Link } from '@components/units';
import { LINKS } from '@utils/constants';
import { getLinkMail } from '@utils/helpers';

import classes from './Contacts.module.scss';

export const Contacts = () => (
  <div className={classes.box}>
    <Link to={LINKS.LINKED_IN} open>
      <p className={classes.text}>{'LinkedIn'}</p>
    </Link>

    <Link to={getLinkMail(LINKS.EMAIL)} open>
      <p className={classes.text}>{'Email'}</p>
    </Link>
  </div>
);
