import { RouteProps } from 'react-router';

import asyncComponent from '#root/app/components/base/asyncComponent';

const AsyncHome = asyncComponent(() => import('#root/app/containers/home'));
const AsyncPage1 = asyncComponent(() => import('#root/app/containers/page1'));
const AsyncPage2 = asyncComponent(() => import('#root/app/containers/page2'));

interface ICustomRouter extends RouteProps {
  title?: string;
  isAuth?: boolean;
}

let routersAuth: Array<ICustomRouter> = [
  {
    title: 'Home',
    path: '/',
    component: AsyncHome,
  },
  {
    title: 'Home',
    path: '/',
    component: AsyncPage1,
  },
  {
    title: 'Home',
    path: '/',
    component: AsyncPage2,
  },
];

routersAuth = routersAuth.map(route => {
  route.isAuth = false;
  return route;
});

export default routersAuth;
