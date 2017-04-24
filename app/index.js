ReactDOM.render(
  h(
    ReactRouterDOM.HashRouter,
    { basename: '/' },
    h(App)
  ),
  document.getElementById('app')
);
