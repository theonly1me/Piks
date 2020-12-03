import React from 'react';
import HeaderComponent from './HeaderComponent';
import '../sass/main.scss';

class App extends React.Component {
  onSearchSubmit(term) {
    //using Publisher-Subscriber model to receive data from child components
    //1. Send callback to child prop
    //2. Receives data inside callback and gets executed by child component when needed
    console.log(term);
  }

  render() {
    return (
      <div className="app__container">
        <HeaderComponent onSubmit={this.onSearchSubmit} /> {/*publisher*/}
      </div>
    );
  }
}

export default App;
