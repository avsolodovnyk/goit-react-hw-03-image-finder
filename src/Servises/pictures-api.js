import axios from 'axios';

function fetchPictures(query, pageNumb) {
  return axios
    .get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${pageNumb}&per_page=12&key=14151340-b99e6816af17de38c6264dcd0`,
    )
    .then(res => {
      return res.data.hits;
    });
}
export default { fetchPictures };
