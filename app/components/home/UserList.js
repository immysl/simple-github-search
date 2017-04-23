const UserList = ({ userList }) => {
  let userElements = [];

  if (userList && userList.length > 0) {
    userElements = userList.map(user => {
      return React.createElement(User, { user });
    });
  }

  return React.createElement('ul', null, userElements);
};
