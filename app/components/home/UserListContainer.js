class UserListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: []
    };
  }

  componentDidUpdate(previousProps, previousState) {
    const { query } = this.props;

    if (query !== previousProps.query) {
      // check if query is empty
      // update as blank array if empty
      // fetch data if not empty
      if (query === '') {
        this.setState({
          userList: []
        });
      } else {
        this.fetchUserList().then(data => {
          this.setState({
            userList: data.items
          });
        }).catch(error => {
          console.error(`Promise error due to network request failure - ${error}`);
        });
      }
    }
  }

  // fetch remote user list data from github
  fetchUserList(query) {
    const apiUrl = `https://api.github.com/search/users?q=${this.props.query}`;

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
