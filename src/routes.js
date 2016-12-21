import HomeComponent from './components/Home/'

const onError = err => console.error(err)
const loadRoute = cb => (module) => cb(null, module.default)

const ROUTES = {
  path: '/',
  component: HomeComponent,
  childRoutes: [
    {
      path: 'child',
      getComponent(location, cb) {
          System.import('./components/Child')
            .then(loadRoute(cb))
            .catch(onError)
      }
    }
  ]
}

export default ROUTES
