// @flow

// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';
import type { Store } from 'types/common';
import storage from 'store';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  if (componentModule) {
    cb(null, componentModule.default);
  }
};

export default function createRoutes(store: Store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  const createRoute = (path: string,
    name: string,
    component: Promise<Object>,
    sagas: ?Promise<Object> = null,
    cancelSagas: boolean = false,
    indexComponent: ?Promise<Object> = null, // Index component is the component which will be used in index route
    childRoutes: Array<Object> = [],
    requiredAuth: boolean = false,
  ) => {
    type Route = {
      path: string,
      name: string,
      getComponent: Function,
      onEnter?: Function,
      onLeave?: Function,
      loadedSagas?: Array<Object>,
      indexRoute?: Object,
      childRoutes?: Array<Object>,
    }

    const route: Route = {
      path,
      name,
      getComponent(nextState: Object, cb: Function) {
        const importModules = Promise.all([component(), sagas && sagas()]);
        const renderRoute = loadModule(cb);
        importModules.then(([loadedComponent, loadedSagas]) => {
          if (loadedSagas) {
            injectReducer(name, loadedSagas.reducer); // a saga module must export the reducer as `export const reducer = (...) => ...`
          }
          renderRoute(loadedComponent);
        });
        importModules.catch(errorLoading);
      },
      childRoutes,
    };

    route.onEnter = function onEnter(nextState: Object, replace: Function, callback: Function) {
      // onEnter gets called when we visit a route
      // childRoute changes do not trigger onEnter, which is a desired behavior
      if (sagas) {
        const importModules = sagas();
        if (importModules != null) {
          importModules.then((importedSagas) => {
            this.loadedSagas = injectSagas(importedSagas.default);
            callback();
          });
          importModules.catch(errorLoading);
        }
      }

      callback();
    }.bind(route);
    if (cancelSagas) {
      route.onLeave = function onLeave() {
      // onLeave gets called when we leave the route
      // Cancel the sagas if they are running
        if (this.loadedSagas) {
          this.loadedSagas.forEach((saga) => saga.cancel());
          delete this.loadedSagas;
        }
      }.bind(route);
    }

    if (indexComponent) {
      route.indexRoute = {
        getComponent(partialNextState: Object, cb: Function) {
          const importModules = Promise.all([indexComponent()]);

          const renderRoute = loadModule(cb);

          importModules.then(([loadedParentComponent]) => {
            renderRoute(loadedParentComponent);
          });

          importModules.catch(errorLoading);
        },
      };
    }
    if (childRoutes) {
      route.childRoutes = childRoutes;
    }
    return route;
  };

  const childRoutes = [
    createRoute(
      '/',
      'home',
      () => import('pages/Home'),
    ),
    createRoute(
      '/overview',
      'overview',
      () => import('pages/Overview'),
    ),
    createRoute(
      '/project',
      'project',
      () => import('pages/ProjectManagement'),
    ),
    createRoute(
      '/timekeeping',
      'timekeeping',
      () => import('pages/TimeKeeping'),
    ),
    createRoute(
      '/pricing',
      'pricing',
      () => import('pages/Pricing'),
    ),
    createRoute(
      '/about',
      'about',
      () => import('pages/About'),
    ),
    createRoute(
      '/requestdemo',
      'requestdemo',
      () => import('pages/RequestDemo'),
    ),
    createRoute(
      '/getstarted',
      'getstarted',
      () => import('pages/GetStarted'),
    ),
    createRoute(
      '/contact',
      'contact',
      () => import('pages/Contact'),
    ),
    createRoute(
      '*',
      'notfound',
      () => import('pages/404')
    ),
  ];

  return {
    getComponent(nextState: Object, cb: Function) {
      const importModules = Promise.all([
        import('containers/App/sagas'),
        import('containers/App'),
      ]);

      const renderRoute = loadModule(cb);

      importModules.then(([sagas, component]) => {
        injectReducer('app', sagas.reducer);
        injectSagas(sagas.default);
        renderRoute(component);
      });

      importModules.catch(errorLoading);
    },
    childRoutes,
  };
}
