class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      userList: [],
      currentUser: {}
    };

    this.onSearchUpdate = this.onSearchUpdate.bind(this);
    this.onUserListUpdate = this.onUserListUpdate.bind(this);
  }

  getHomeProps(props) {
    let newProps = props;

    newProps.query = this.state.query;
    newProps.onSearchUpdate = this.onSearchUpdate;
    newProps.onUserListUpdate = this.onUserListUpdate;

    return newProps;
  }

  getProfileProps(props) {
    let newProps = props;

    newProps.userList = this.state.userList;
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
            path: '/profile/:id',
            render: (props) => React.createElement(Profile, this.getProfileProps(props))
          }
        )
      ]
    );
  }

  onSearchUpdate(query) {
    this.setState({ query });
  }

  onUserListUpdate(userList) {
    this.setState({ userList });
  }
}
