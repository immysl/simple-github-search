class Search extends React.Component {
  constructor(props) {
    super(props);

    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery(event) {
    this.props.onSearchUpdate(event.target.value);
  }

  render() {
    return React.createElement(
      'form',
      { id: 'search-form' },
      React.createElement(
        'input',
        {
          type: 'search',
          placeholder: 'search github users',
          onChange: this.updateQuery
        },
        null
      )
    );
  }
};
