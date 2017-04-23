class ProfileContainer extends React.Component {
  componentDidUpdate(previousProps, previousState) {
    const { username } = this.props;

    if (username !== previousProps.username) {
      this.fetchUserInfo(username).then(data => {
        this.userInfo = data[0];
        this.userRepose = data[1];
      }).catch(error => {
        console.error(`Promise error due to network request failure - ${error}`);
      });
    }
  }

  fetchUserInfo(username) {
    return Promise.all([
      this.fetchUserDetails(),
      this.fetchUserRepos()
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
    return React.createElement(Profile, { userInfo: this.userInfo, userRepose: this.userRepos });
  }
}
