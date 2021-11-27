import React, { FC, ReactElement } from 'react';

export interface Page1Props {}

const Page2: FC<Page1Props> = ({}): ReactElement => {
  return <div>{'Page 2'}</div>;
};

export default Page2;
