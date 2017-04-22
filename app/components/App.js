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
      'section',
      null,
      [
        React.createElement('h1', null, 'Simple GitHub Search'),
        React.createElement(Search, { onSearchUpdate: this.onSearchUpdate }, null),
        React.createElement(
          UserListContainer,
          {
            query: this.state.query,
            onUserListUpdate: this.onUserListUpdate
          },
          null
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
