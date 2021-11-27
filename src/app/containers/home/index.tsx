import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

export interface IHomeProps {}

const Home: FC<IHomeProps> = (props): ReactElement => {
  return (
    <div>
      <h1>Hello world</h1>
      <ul>
        <li>
          <Link to="/page1">Page 1</Link>
        </li>
        <li>
          <Link to="/page2">Page 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
