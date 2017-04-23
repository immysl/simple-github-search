const Home = ({ onSearchUpdate, query }) => {
  return React.createElement(
    'section',
    null,
    [
      React.createElement(Search, { onSearchUpdate }),
      React.createElement(UserListContainer, { query })
    ]
  );
};
