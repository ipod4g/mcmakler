import axios from 'axios';

const mapData = (data) => {
  const arrayList = data.data;

  return Object.keys(arrayList).slice(0, 10).map((items) => {
    const { _id: { $id } } = arrayList[items];
    const {
      advertisementAssets,
      realestateSummary,
      title,
      advertisementPrice,
      purpose,
    } = arrayList[items];

    return ({
      advertisementAssets, realestateSummary, title, advertisementPrice, purpose, $id,
    });
  });
};

class advertismentApi {
  static listOfAdvertisment() {
    const url = 'https://api.mcmakler.de/v1/advertisements';

    return axios.get(url)
      .then(({ data }) => mapData(data))
      /* eslint-disable no-console */
      .catch(errors => console.log('Some Criticsl error, look here:', errors));
    /* eslint-enable no-console */
  }
}

export default advertismentApi;
