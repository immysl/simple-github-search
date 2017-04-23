class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
      userRepos: []
    };
  }

  componentWillMount() {
    const { username } = this.props.match.params;

    this.fetchUserInfo(username).then(data => {
      this.setState({
        userInfo: data[0],
        userRepose: data[1]
      });
    }).catch(error => {
      console.error(`Promise error due to network request failure - ${error}`);
    });
  }

  fetchUserInfo(username) {
    return Promise.all([
      this.fetchUserDetails(username),
      this.fetchUserRepos(username)
    ]);
  }

  fetchUserDetails(username) {
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

  processResponse(response) {
    if (response.status !== 200) {
      console.error(`Error when fetching user data from GitHub - ${response.status}: ${response.statusText}`);
      return;
    }

    return response.json();
  }

  render() {
    const { userInfo, userRepos } = this.state;

    return React.createElement(Profile, { userInfo, userRepos });
  }
}
