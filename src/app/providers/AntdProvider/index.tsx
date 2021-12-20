import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { ConfigProvider } from 'antd';
import { Locale } from 'antd/lib/locale-provider';
import { LanguageType } from 'app/types';

import en_US from 'antd/lib/locale/en_US';
import vi_VN from 'antd/lib/locale/vi_VN';

const languages: {
  [key in LanguageType]: Locale;
} = {
  en: en_US,
  vi: vi_VN,
};

export interface AntdProviderProps extends PropsWithChildren<any> {}

const AntdProvider: FC<AntdProviderProps> = ({ children }): ReactElement => {
  const locale: LanguageType = 'en';

  return <ConfigProvider locale={languages[locale]}>{children}</ConfigProvider>;
};

export default AntdProvider;
