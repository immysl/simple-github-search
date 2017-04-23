class UserListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: []
    };
  }

  componentWillMount() {
    const { query } = this.props;

    // update user list if query is not empty or undefined
    if (!!query) {
      this.setUserList(query);
    }
  }

  componentDidUpdate(previousProps, previousState) {
    const { query } = this.props;

    if (query !== previousProps.query) {
      // check if query is empty
      // if empty reset user list
      // else fetch and set user list
      if (query === '') {
        this.resetUserList();
      } else {
        this.setUserList(query);
      }
    }
  }

  resetUserList() {
    this.setState({
      userList: []
    });
  }

  setUserList(query) {
    this.fetchUserList(query).then(data => {
      this.setState({
        userList: data.items
      });
    }).catch(error => {
      console.error(`Promise error due to network request failure - ${error}`);
    });
  }

  // fetch remote user list data from github
  fetchUserList(query) {
    const apiUrl = `https://api.github.com/search/users?q=${query}`;

    return fetch(apiUrl).then(response => {
      if (response.status !== 200) {
        console.error(`Error when fetching user list data from GitHub - ${response.status}: ${response.statusText}`);
        return;
      }

      return response.json();
    });
  }

  render() {
    return React.createElement(UserList, { userList: this.state.userList });
  }
}
