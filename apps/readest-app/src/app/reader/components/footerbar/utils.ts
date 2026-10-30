import React from 'react';

export const getNavigationIcon = (
  rtl: boolean | undefined,
  prevIcon: React.ReactNode,
  nextIcon: React.ReactNode,
) => (rtl ? nextIcon : prevIcon);
