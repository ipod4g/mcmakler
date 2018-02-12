import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import './AdvertisementBody.scss';


class AdvertisementBody extends Component {
  addDocToThousands(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  render() {
    const {
      title,
      realestateSummary,
      purpose,
      advertisementPrice,
      advertisementAssets,
    } = this.props;
    const addess = realestateSummary.address;
    const rooms = realestateSummary.numberOfRooms;

    const purposeName = purpose ? 'Kaufen' : 'Mieten';
    const space = parseInt(realestateSummary.space, 10);
    const customeTitle = title.replace(/\+/g, '');

    let price = this.addDocToThousands(advertisementPrice.baseRent);

    if (advertisementPrice.purpose) {
      price = this.addDocToThousands(advertisementPrice.sellPrice);
    }

    return (
      <div className="adver-wrapper">
        <Carousel
          indicators={false}
          interval={null}
        >
          {advertisementAssets.slice(0, advertisementAssets.length - 1).map(element => (
            <Carousel.Item>
              <img className="apartment-image" alt="Apartment" src={element} />
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="info-button">
          {purposeName}
        </div>
        <div className="main-info-wrapper">
          <p className="main-title">{customeTitle}</p>
          <div className="address-wrapper">
            <p className="address-wrapper__info">
              {addess.postalCode} {addess.street} / {addess.city}
            </p>
          </div>
          <div className="price-info">
            <span className="price-info__price">{price} €</span>
            <span className="price-info__rooms">{rooms} Zimmer</span>
            <span className="price-info__space">ab {space} m<sup>2</sup></span>
          </div>
        </div>
      </div>
    );
  }
}

AdvertisementBody.propTypes = {
  title: PropTypes.string,
  advertisementAssets: PropTypes.arrayOf(PropTypes.string),
  purpose: PropTypes.number,
  advertisementPrice: PropTypes.shape({
    sellPrice: PropTypes.number,
    baseRent: PropTypes.number,
  }),
  realestateSummary: PropTypes.shape({
    numberOfRooms: PropTypes.number,
  }),
};

AdvertisementBody.defaultProps = {
  title: '',
  advertisementAssets: {},
  purpose: 0,
  advertisementPrice: {
    baseRent: 0,
    sellPrice: 0,
  },
  realestateSummary: {
    numberOfRooms: 0,
  },
};

export default AdvertisementBody;

