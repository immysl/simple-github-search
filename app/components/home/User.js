const User = ({ user }) => {
  return h(
    'li',
    null,
    h(
      ReactRouterDOM.Link,
      { to: `/profile/${user.login}` },
      [
        h('img', { src: user.avatar_url, width: 20 }),
        h('span', null, user.login)
      ]
    )
  );
};
