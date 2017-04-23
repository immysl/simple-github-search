ReactDOM.render(
  h(
    ReactRouterDOM.BrowserRouter,
    { basename: '/' },
    h(App)
  ),
  document.getElementById('app')
);
