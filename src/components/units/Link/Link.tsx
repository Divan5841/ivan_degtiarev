import { AnchorHTMLAttributes, FC } from 'react';
import { Link as NavLink } from 'react-router-dom';
import clsx from 'clsx';

import classes from './Link.module.scss';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;

  anchor?: boolean;
  open?: boolean;
}

export const Link: FC<Props> = ({
  to,
  anchor,
  open,
  className,
  ...otherProps
}) => {
  const openProps = open
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  const props = {
    ...openProps,
    ...otherProps,
    className: clsx(classes.link, className),
  };

  if (to?.startsWith('/')) {
    return (
      <NavLink to={to} {...props}>
        {otherProps.children}
      </NavLink>
    );
  }

  if (to) {
    return <a href={anchor ? `#${to}` : to} {...props} />;
  }

  return <>{otherProps.children}</>;
};
