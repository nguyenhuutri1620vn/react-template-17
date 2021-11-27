import { routerActions } from 'connected-react-router';
import { Push, Replace } from 'connected-react-router';

export const replace: Push = routerActions.replace;
export const push: Replace = routerActions.push;
