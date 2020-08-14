import { StyleSheet } from 'aphrodite/no-important';

export const controlWrapper = (styles: any = {}, isConfirm?: boolean) =>
  StyleSheet.create({
    _: {
      display: 'flex',
      justifyContent: isConfirm ? 'space-between' : 'center',
      marginTop: '20px',
      ...styles
    }
  });

export const root = (styles: any = {}) =>
  StyleSheet.create({
    _: {
      position: 'absolute',
      zIndex: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: '0',
      left: '0',
      width: '100%',
      height: '100vh',
      background: 'rgba(0,0,0, 0.2)',
      ...styles
    }
  });

export const wrapper = (styles: any = {}) =>
  StyleSheet.create({
    _: {
      position: 'relative',
      width: '100%',
      maxWidth: `500px`,
      borderRadius: '15px',
      padding: '75px 60px 60px',
      boxShadow: '5px 8px 40px 0 rgba(0,0,0, 0.12)',
      background: 'white',
      ...styles
    }
  });

export const close = ({ svg, path }: any = {}) =>
  StyleSheet.create({
    _: {
      position: 'absolute',
      width: '15px',
      height: '15px',
      top: '20px',
      right: '20px',
      cursor: 'pointer',
      ':first-child > path': {
        fill: '#010E28',
        ...(path || {})
      },
      ...(svg || {})
    }
  });
