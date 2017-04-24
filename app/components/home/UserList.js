const UserList = ({ userList }) => {
  let userElements = [];

  // avoid undefined getting printed on screen
  // the userList array is returned asynchronously
  // so only render child components when it is available
  if (userList && userList.length > 0) {
    // generate an array of User components to display as user list
    userElements = userList.map(user => {
      return h(User, { user });
    });
  }

  return h('ul', { className: 'list-unstyled' }, userElements);
};
