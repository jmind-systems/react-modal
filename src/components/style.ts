import { StyleSheet } from 'aphrodite/no-important';
import { ButtonTypes, ButtonStyles } from 'constants';

export const button = (type: ButtonTypes, customStyles: { [key: string]: string } = {}) =>
  StyleSheet.create({
    // @ts-ignore
    _: {
      ...ButtonStyles[type],
      ...customStyles
    }
  });
