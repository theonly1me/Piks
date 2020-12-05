import React from 'react';
// import axios from 'axios';
import unsplashAPI from '../api/unsplash';
import HeaderComponent from './HeaderComponent';
import ImageListComponent from './ImageListComponent';
import FooterComponent from './FooterComponent';

import '../sass/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    //alterntively we can directly bind this where the function call happens
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  componentDidMount() {
    this.getRandomPhotos();
  }

  state = { images: [] };

  async onSearchSubmit(term) {
    //using Publisher-Subscriber model to receive data from child components
    //1. Send callback to child prop
    //2. Receives data inside callback and gets executed by child component when needed
    const response = await unsplashAPI.get('/search/photos', {
      params: { query: term, per_page: 20 },
    });
    // const url = new URL('https://api.unsplash.com/search/photos');
    // url.searchParams.append('query', term);

    // const responseData = await fetch(url, {
    //   headers: {
    //     Authorization: 'Client-ID 7H8U0UA2462o80CaGfII6R0yfz5bLWdD2ckGH0NjTMI',
    //   },
    // });
    // const data = await responseData.json();
    this.setState({ images: response.data.results });
  }

  async getRandomPhotos() {
    const response = await unsplashAPI.get('/photos/random', {
      params: { count: 20 },
    });
    this.setState({ images: response.data });
  }

  render() {
    return (
      <div className="app__container">
        <HeaderComponent onSubmit={this.onSearchSubmit} /> {/*publisher*/}
        {this.state.images?.length ? (
          <ImageListComponent images={this.state.images} />
        ) : null}
        <FooterComponent />
      </div>
    );
  }
}

export default App;
