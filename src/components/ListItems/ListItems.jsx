import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdvertisementBody from '../AdvertisementBody/AdvertisementBody';
import './ListItems.scss';

class ListItems extends Component {
  constructor(props) {
    super(props);

    this.getPictUrl = this.getPictUrl.bind(this);
  }

  componentDidMount() {
    this.props.getListItems();
  }


  getPictUrl(advertisementAssets) {
    return Object.keys(advertisementAssets).map((assetItem) => {
      const { advertisementThumbnails = {} } = advertisementAssets[assetItem];
      const { inventory_m = {} } = advertisementThumbnails;

      return inventory_m.url;
    });
  }


  render() {
    const { data } = this.props;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="main-wrapper">
              {Object.keys(data).map(key => (
                <div className="col-md-4">
                  <AdvertisementBody
                    title={data[key].title}
                    realestateSummary={data[key].realestateSummary}
                    advertisementAssets={this.getPictUrl(data[key].advertisementAssets)}
                    purpose={data[key].purpose}
                    advertisementPrice={data[key].advertisementPrice}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ListItems.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  getListItems: PropTypes.func,
};

ListItems.defaultProps = {
  data: [],
  getListItems: () => true,
};

export default ListItems;
