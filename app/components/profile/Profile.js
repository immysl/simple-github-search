const Profile = ({ userInfo, userRepos }) => {
  let userDetailElements = [];

  // avoid undefined getting printed on screen
  // the userInfo obj is returned asynchronously
  // so only render child components when it is available
  if (userInfo && userInfo.id) {
    userDetailElements = [
      React.createElement('li', null, `User ID: ${userInfo.id}`),
      React.createElement('li', null, `Username: ${userInfo.login}`),
      React.createElement('li', null, `Name: ${userInfo.name}`)
    ];
  }

  return React.createElement('section', null, userDetailElements);
};
