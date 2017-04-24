class Search extends React.Component {
  constructor(props) {
    super(props);

    // bind function to Search component context
    this.updateQuery = this.updateQuery.bind(this);
  }

  // update query in App component to pass as props to UserListContainer
  updateQuery(event) {
    this.props.onSearchUpdate(event.target.value);
  }

  render() {
    return h(
      'form',
      { className: 'text-center' },
      h(
        'input',
        {
          type: 'search',
          placeholder: 'search github users',
          className: 'form-control',
          onChange: this.updateQuery
        }
      )
    );
  }
};
