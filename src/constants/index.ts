export enum ModalTypes {
  submit = 'submit',
  confirm = 'confirm',
  custom = 'custom'
}

export enum ButtonTypes {
  cancel = 'cancel',
  submit = 'submit'
}

export const ButtonStyles = {
  [ButtonTypes.submit]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '160px',
    height: '40px',
    background: '#1A3D98',
    color: '#fff',
    fontSize: '16px',
    border: '1px solid #1A3D98',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  [ButtonTypes.cancel]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '160px',
    height: '40px',
    background: '#fff',
    color: '#1A3D98',
    fontSize: '16px',
    border: '1px solid #1A3D98',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};
