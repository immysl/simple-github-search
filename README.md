# Simple GitHub Search
A simple GitHub search to find users

This simple React app doesn't make use of any build tools such as Babel or Webpack. Therefore, libraries are loaded via the UNPKG CDN. Also no imports/expors are used, hence all the script files are loaded in the index file.

React's `createElement` function is used to create React elements in favour of JSX, since Babel has not been used. The `h` function used in React components is a shortcut for `createElement`.