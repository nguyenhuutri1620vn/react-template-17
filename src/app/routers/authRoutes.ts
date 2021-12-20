import { RouteProps } from 'react-router';

import asyncComponent from 'app/components/base/asyncComponent';

const AsyncHome = asyncComponent(() => import('app/containers/home'));
const AsyncPage1 = asyncComponent(() => import('app/containers/page1'));
const AsyncPage2 = asyncComponent(() => import('app/containers/page2'));

interface ICustomRouter extends RouteProps {
  title?: string;
  isAuth?: boolean;
}

let routersAuth: Array<ICustomRouter> = [
  {
    title: 'Home',
    path: '/',
    exact: true,
    component: AsyncHome,
  },
  {
    title: 'Path 1',
    path: '/page1',
    component: AsyncPage1,
  },
  {
    title: 'Path 2',
    path: '/page2',
    component: AsyncPage2,
  },
];

routersAuth = routersAuth.map(route => {
  route.isAuth = true;
  return route;
});

export default routersAuth;
