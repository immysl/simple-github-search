const Home = (props) => {
  return React.createElement(
    'section',
    null,
    [
      React.createElement(Search, { onSearchUpdate: props.onSearchUpdate }),
      React.createElement(
        UserListContainer,
        {
          query: props.query,
          onUserListUpdate: props.onUserListUpdate,
          onCurrentUserUpdate: props.onCurrentUserUpdate
        }
      )
    ]
  );
};
