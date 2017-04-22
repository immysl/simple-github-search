class UserListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(previousProps, previousState) {
    if (this.props.query !== previousProps.query) {
      this.fetchUserList().then(data => {
        // update the UserList props to rerender with the new user list
        this.userList = data.items;

        // update the state in the App component for further usage
        this.props.onUserListUpdate(this.userList);
      }).catch(error => {
        console.error(`Promise error due to network request failure - ${error}`);
      });
    }
  }

  fetchUserList(query) {
    const apiUrl = `https://api.github.com/search/users?q=${this.props.query}`;

    return fetch(apiUrl).then(response => {
      if (response.status !== 200) {
        console.error(`Error when fetching data from GitHub - ${response.status}: ${response.statusText}`);
        return;
      }

      return response.json();
    });
  }

  render() {
    return React.createElement(UserList, { userList: this.userList }, null);
  }
}
