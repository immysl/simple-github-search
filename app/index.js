ReactDOM.render(
  React.createElement(
    ReactRouterDOM.BrowserRouter,
    { basename: '/' },
    React.createElement(App)
  ),
  document.getElementById('app')
);
