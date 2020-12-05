import React from 'react';

class CardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setRowSpans);
  }

  setRowSpans = () => {
    //to bind 'this'
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 2);
    this.setState({ spans }); //ES2015 syntax when Key and Value of OBJ are same
  };

  render() {
    const { alt_description: description, urls } = this.props.image;
    return (
      <div
        style={{ gridRowEnd: `span ${this.state.spans}` }}
        className="image__container-frame"
      >
        <img
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
          className="img"
        ></img>
      </div>
    );
  }
}

export default CardComponent;
