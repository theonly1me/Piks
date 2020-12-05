import React from 'react';

class SearchComponent extends React.Component {
  //uncontrolled input---
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }

  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  state = { term: '' }; //initialize state

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search">
        <form
          className="search__form"
          onSubmit={this.handleOnSubmit}
          autoComplete="off"
        >
          <input
            className="search__form-input"
            type="text"
            id="search"
            value={this.state.term}
            placeholder="Search &rarr;"
            onChange={e => this.setState({ term: e.target.value })}
          />
          <label className="search__form-label" htmlFor="search">
            Search &uarr;
          </label>
        </form>
      </div>
    );
  }
}

export default SearchComponent;
