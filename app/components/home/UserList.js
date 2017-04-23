const UserList = ({ userList }) => {
  let userElements = [];

  if (userList && userList.length > 0) {
    userElements = userList.map(user => {
      return h(User, { user });
    });
  }

  return h('ul', { className: 'list-unstyled' }, userElements);
};
