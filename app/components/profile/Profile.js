const Profile = ({ userInfo, userRepos }) => {
  let userInfoElements = [];
  let userReposElements = [];

  // avoid undefined getting printed on screen
  // the userInfo obj is returned asynchronously
  // so only render child components when it is available
  if (userInfo && userInfo.id) {
    for (const prop in userInfo) {
      if (userInfo.hasOwnProperty(prop) === true) {
        userInfoElements.push(
          h('li', null, `${prop}: ${userInfo[prop]}`)
        );
      }
    }
  }

  // check for the same reason as above
  if (userRepos && userRepos.length > 0) {
    userReposElements = userRepos.map(repo => {
      return h(
        'li',
        null,
        [
          h('a', { href: repo.html_url }, `${repo.name}: `),
          h('span', null, repo.description)
        ]
      );
    });
  }

  return h(
    'section',
    null,
    [
      h(ReactRouterDOM.Link, { to: '/' }, 'Go Back'),
      h('h2', null, 'User Info'),
      h('ul', { className: 'list-unstyled' }, userInfoElements),
      h('h2', null, 'User Repos'),
      h('ul', { className: 'list-unstyled' }, userReposElements)
    ]
  );
};
