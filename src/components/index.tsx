import * as React from 'react';
import { ButtonTypes, ButtonStyles } from 'constants';
import { css } from 'aphrodite/no-important';

import * as styles from './style';

type Props = {
  type: ButtonTypes;
  customStyles?: { [key: string]: string };
  onClick: () => any;
  children: any;
};

export const Button: React.FC<Props> = React.memo(({ onClick, type, customStyles, children }) => (
  <button onClick={onClick} className={css(styles.button(type, customStyles)._)}>
    {children}
  </button>
));
