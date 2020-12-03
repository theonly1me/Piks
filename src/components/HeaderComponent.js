import React from 'react';
import SearchComponent from './SearchComponent';

class Header extends React.Component {
  render() {
    return (
      <div className="header__container">
        <div className="header__container-content">
          <h1 className="header__container-heading">Piks🔴</h1>
          <SearchComponent onSubmit={this.props.onSubmit} />
        </div>
      </div>
    );
  }
}

export default Header;
