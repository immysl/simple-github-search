const Profile = ({ userInfo, userRepos }) => {
  const userDetailElements = [
    React.createElement('li', null, `User ID: ${userInfo.id}`),
    React.createElement('li', null, `Username: ${userInfo.login}`),
    React.createElement('li', null, `Name: ${userInfo.name}`)    
  ];

  return React.createElement('section', null, userDetailElements);
};
