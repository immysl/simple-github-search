const User = ({ user }) => {
  return React.createElement(
    'li',
    null,
    React.createElement(
      ReactRouterDOM.Link,
      { to: `profile/${user.login}` },
      [
        React.createElement('span', null, user.id),
        React.createElement('img', { src: user.avatar_url, width: 100 }, null)
      ]
    )
  );
};
