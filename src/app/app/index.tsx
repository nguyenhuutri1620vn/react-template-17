import React, { FC, Props, useEffect, useMemo } from 'react';

import { injectReducer, injectSaga } from 'redux-injectors';
import { compose } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { UtilInject } from '#root/app/utils';

import { authRoutes } from '#root/app/routers';

import appReducer from './reducer';
import appSaga from './saga';

import { Switch, Route } from 'react-router-dom';
// import Switch from '#root/app/router/Switch';
import * as selectors from '#root/app/app/selectors';

export interface IAppProps extends Props<HTMLElement> {}

const App: FC<IAppProps> = ({}) => {
  const isLoading = useSelector(selectors.isLoadingSelector);
  const isMaintaining = useSelector(selectors.isMaintainingSelector);

  const authToken = true;
  const isCheckedLogin = false;

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(authActions.checkTokenExisted());
  }, [dispatch]);

  const isLoggedIn = useMemo(() => !!authToken, [authToken]);

  return (
    // <>{/* {isCheckedLogin && !isLoading && !isMaintaining && <Router isLoggedIn={isLoggedIn} role={role} />} */}á đù</>
    <div>
      <Switch>
        {authRoutes.map(route => {
          return <Route key={route.path as string} {...route} />;
        })}
      </Switch>
    </div>
  );
};

export default UtilInject.combineInjectionComponent(
  [compose(injectReducer({ key: 'appReducer', reducer: appReducer }), injectSaga({ key: 'appSaga', saga: appSaga }))],
  App
) as FC<IAppProps>;
