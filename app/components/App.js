class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    // bind function to App component context
    // this is to avoid the event context taking over inside the function
    this.onSearchUpdate = this.onSearchUpdate.bind(this);
  }

  // append extra props to route props
  getHomeProps(props) {
    let newProps = props;

    newProps.query = this.state.query;
    newProps.onSearchUpdate = this.onSearchUpdate;

    return newProps;
  }

  // set query in App state from Search component 
  // and pass as props to Home > UserListContainer
  onSearchUpdate(query) {
    this.setState({ query });
  }

  render() {
    return h(
      'div',
      { className: 'container' },
      [
        h('h1', { className: 'text-center' }, 'Simple GitHub Search'),
        h(
          ReactRouterDOM.Route,
          {
            path: '/',
            exact: true, // avoid index route being visible in other routes
            render: (props) => h(Home, this.getHomeProps(props))
          }
        ),
        h(
          ReactRouterDOM.Route,
          {
            path: '/profile/:username',
            component: ProfileContainer
          }
        )
      ]
    );
  }
}
