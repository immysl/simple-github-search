class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.onSearchUpdate = this.onSearchUpdate.bind(this);
  }

  getHomeProps(props) {
    let newProps = props;

    newProps.query = this.state.query;
    newProps.onSearchUpdate = this.onSearchUpdate;

    return newProps;
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
            exact: true,
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

  onSearchUpdate(query) {
    this.setState({ query });
  }
}
