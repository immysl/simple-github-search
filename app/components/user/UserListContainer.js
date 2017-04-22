class UserListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(previousProps, previousState) {
    if (this.props.query !== previousProps.query) {
      // check if query is empty
      // update as blank array if empty
      // fetch data if not empty
      if (this.props.query === '') {
        this.updateUserList();
      } else {
        this.fetchUserList().then(data => {
          this.updateUserList(data.items);
        }).catch(error => {
          console.error(`Promise error due to network request failure - ${error}`);
        });
      }
    }
  }

  // update local user list
  updateUserList(userList = []) {
    // update the UserList props to rerender with the new user list    
    this.userList = userList;

    // update the state in the App component for further usage    
    this.props.onUserListUpdate(this.userList);
  }

  // fetch remote user list data from github
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
