import React from 'react';

class SearchComponent extends React.Component {
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }

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
          onSubmit={this.handleOnSubmit.bind(this)}
        >
          <input
            className="search__form-input"
            type="text"
            value={this.state.term}
            placeholder="search..."
            onChange={e => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchComponent;
