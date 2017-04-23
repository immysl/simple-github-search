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
    return React.createElement(
      'div',
      { className: 'container' },
      [
        React.createElement('h1', null, 'Simple GitHub Search'),
        React.createElement(
          ReactRouterDOM.Route,
          {
            path: '/',
            exact: true,
            render: (props) => React.createElement(Home, this.getHomeProps(props))
          }
        ),
        React.createElement(
          ReactRouterDOM.Route,
          {
            path: '/profile/:username',
            render: ProfileContainer
          }
        )
      ]
    );
  }

  onSearchUpdate(query) {
    this.setState({ query });
  }
}
