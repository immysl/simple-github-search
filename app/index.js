// render to #app div
// use HashRouter to avoid issues with refresh and codepen
ReactDOM.render(
  h(
    ReactRouterDOM.HashRouter,
    { basename: '/' },
    h(App)
  ),
  document.getElementById('app')
);
