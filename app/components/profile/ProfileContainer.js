class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
      userRepos: []
    };
  }

  // set user details when profile route activates component
  componentWillMount() {
    const { username } = this.props.match.params;

    // set user info and user repos as state to pass down as props to Profile
    this.fetchAllUserDetails(username).then(data => {
      this.setState({
        userInfo: data[0],
        userRepos: data[1]
      });
    }).catch(error => {
      console.error(`Promise error due to network request failure - ${error}`);
    });
  }

  // fetch both user info and user repos data
  fetchAllUserDetails(username) {
    return Promise.all([
      this.fetchUserInfo(username),
      this.fetchUserRepos(username)
    ]);
  }

  fetchUserInfo(username) {
    const userApiUrl = `https://api.github.com/users/${username}`;

    return fetch(userApiUrl).then(response => {
      return this.processResponse(response);
    });
  }

  fetchUserRepos(username) {
    const reposApiUrl = `https://api.github.com/users/${username}/repos`;

    return fetch(reposApiUrl).then(response => {
      return this.processResponse(response);
    });
  }

  // check for any errors and if none return in JSON format
  processResponse(response) {
    if (response.status !== 200) {
      console.error(`Error when fetching user data from GitHub - ${response.status}: ${response.statusText}`);
      return;
    }

    return response.json();
  }

  render() {
    const { userInfo, userRepos } = this.state;

    return h(Profile, { userInfo, userRepos });
  }
}
