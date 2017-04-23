const Home = ({ onSearchUpdate, query }) => {
  return h(
    'section',
    null,
    [
      h(Search, { onSearchUpdate }),
      h(UserListContainer, { query })
    ]
  );
};
