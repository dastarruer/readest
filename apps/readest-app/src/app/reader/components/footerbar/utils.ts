import React from 'react';

export const getNavigationIcon = (
  rtl: boolean | undefined,
  prevIcon: React.ReactNode,
  nextIcon: React.ReactNode,
) => (rtl ? nextIcon : prevIcon);

const getNavigationLabel = (rtl: boolean | undefined, prevLabel: string, nextLabel: string) =>
  rtl ? nextLabel : prevLabel;

const getNavigationHandler = (
  rtl: boolean | undefined,
  prevHandler: () => void,
  nextHandler: () => void,
) => (rtl ? nextHandler : prevHandler);
