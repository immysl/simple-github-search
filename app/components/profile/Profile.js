const Profile = ({ match, userList }) => {
  let currentUser = {};

  // store param ID and cast to int
  const id = +match.params.id;

  userList.some((user) => {
    if (user.id === id) {
      currentUser = user;
      return;
    }
  });

  const userDetailElements = [
    React.createElement('li', null, `User ID: ${currentUser.id}`),
    React.createElement('li', null, `Username: ${currentUser.login}`)
  ];

  return React.createElement('section', null, userDetailElements);
};
