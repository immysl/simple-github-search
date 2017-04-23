class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      userList: []
    };

    this.onSearchUpdate = this.onSearchUpdate.bind(this);
    this.onUserListUpdate = this.onUserListUpdate.bind(this);
  }

  render() {
    return React.createElement(
      'div',
      { className: 'container' },
      [
        React.createElement('h1', null, 'Simple GitHub Search'),
        React.createElement(
          'Route',
          {
            path: '/',
            exact: true,
            component: Home
          },
          [
            React.createElement(Search, { onSearchUpdate: this.onSearchUpdate }),
            React.createElement(UserListContainer, { query: this.state.query, onUserListUpdate: this.onUserListUpdate })
          ]
        ),
        React.createElement('Route', { path: '/profile/:id', component: Profile })
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
