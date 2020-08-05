import * as React from 'react';

export type ModalSettings = {
  rootStyles?: { [key: string]: string };
  overlayStyles?: { [key: string]: string };
  withCloseBtn?: boolean;
  closeStyles?: {
    svg: { [key: string]: string };
    path: { [key: string]: string };
  };
};

export type ModalControlsSettings = {
  cancel?: {
    text?: string;
    styles?: { [key: string]: string };
  };
  submit?: {
    text?: string;
    styles?: { [key: string]: string };
  };
  wrapper?: { [key: string]: string };
};
