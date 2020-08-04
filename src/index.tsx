import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';

import Close from 'icons/cross.svg';

import { ModalTypes } from 'constants';
import { ModalControlsSettings, ModalSettings } from 'types';
import { Button } from 'components';
import { createObserver } from 'utils';

import * as styles from './style';

type Props = {
  name: string;
  children: React.ReactNode;
  type?: ModalTypes;
  onClose?: () => void;
  onSubmit?: () => void;
  settings?: ModalSettings;
  controlsSettings?: ModalControlsSettings;
  closeIcon?: React.ReactNode;
  portalId?: string;
};

const observer = createObserver();

export const Modal: React.FC<Props> = React.memo(
  ({ name, portalId, onClose, onSubmit, settings, children, controlsSettings, type }) => {
    const [show, setShow] = React.useState(false);

    const remove = React.useCallback((modalName) => modalName === name && setShow(false), [name]);
    const add = React.useCallback((modalName) => modalName === name && setShow(true), [name]);

    observer.subscribe('remove', remove);
    observer.subscribe('add', add);

    const closeModal = React.useCallback(() => {
      remove(name);
      onClose?.();
    }, [onClose, remove]);

    const submitModal = React.useCallback(() => {
      remove(name);
      onSubmit?.();
    }, [onSubmit, remove]);

    const buttonsJSX = React.useMemo(() => {
      switch (type) {
        case ModalTypes.submit: {
          return (
            <div className={css(styles.controlWrapper(controlsSettings.wrapper)._)}>
              <Button customStyles={controlsSettings?.submit?.styles} onClick={submitModal}>
                {controlsSettings.submit.text}
              </Button>
            </div>
          );
        }
        case ModalTypes.confirm: {
          return (
            <div className={css(styles.controlWrapper(controlsSettings.wrapper)._)}>
              <Button
                customStyles={{ marginRight: '25px', ...(controlsSettings?.cancel?.styles || {}) }}
                onClick={closeModal}
              >
                {controlsSettings.cancel.text}
              </Button>
              <Button customStyles={controlsSettings?.submit?.styles} onClick={submitModal}>
                {controlsSettings.submit.text}
              </Button>
            </div>
          );
        }
        default:
          return null;
      }
    }, [controlsSettings, type]);

    return ReactDOM.createPortal(
      show ? (
        <div className={css(styles.root(settings.overlayStyles)._)} onClick={closeModal}>
          <div onClick={(e) => e.stopPropagation()} className={css(styles.wrapper(settings.rootStyles)._)}>
            {settings.withCloseBtn && (
              <Close className={css(styles.close(settings.closeStyles)._)} onClick={closeModal} />
            )}
          </div>
          {children}
          {buttonsJSX}
        </div>
      ) : null,
      document.getElementById(portalId)
    );
  }
);

Modal.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf([ModalTypes.confirm, ModalTypes.submit, ModalTypes.custom]),
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  settings: PropTypes.shape({
    rootStyles: PropTypes.object,
    overlayStyles: PropTypes.object,
    withCloseBtn: PropTypes.bool,
    closeStyles: PropTypes.object
  }),
  controlsSettings: PropTypes.shape({
    close: PropTypes.shape({
      text: PropTypes.string,
      styles: PropTypes.object
    }),
    submit: PropTypes.shape({
      text: PropTypes.string,
      styles: PropTypes.object
    }),
    wrapper: PropTypes.object
  }),
  closeIcon: PropTypes.node,
  portalId: PropTypes.string
};

Modal.defaultProps = {
  portalId: 'modal',
  settings: {
    withCloseBtn: true
  },
  controlsSettings: {
    submit: {
      text: 'Submit'
    },
    cancel: {
      text: 'Cancel'
    }
  }
};

export const addModal = (name: string) => observer.dispatch('add', name);
export const removeModal = (name: string) => observer.dispatch('remove', name);
