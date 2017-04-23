class Search extends React.Component {
  constructor(props) {
    super(props);

    this.updateQuery = this.updateQuery.bind(this);
  }

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
