import React, { FC, PropsWithChildren, ReactElement } from 'react';

export interface LanguageProviderProps extends PropsWithChildren<any> {}

const LanguageProvider: FC<LanguageProviderProps> = ({ children }): ReactElement => {
  // TODO
  return <>{children}</>;
};

export default LanguageProvider;
