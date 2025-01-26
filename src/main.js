import './js/init';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import axios from 'axios';

const baseUrl = 'https://pixabay.com/api/?';
const API_KEY = '48399114-e6afb1ef5f2eaab40be0bb5b8';

let params = {
  key: API_KEY,
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
  page: 1,
};

let totalHits = 0;
const message1 = "Sorry, there are no images matching your search query.Please, try again!";
const message2 = "We're sorry, but you've reached the end of search results";
const contentUL = document.querySelector('.image-content');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load-more-button');

// showing error using izitoast
function showError(errorMessage, bgcolor) {
  iziToast.settings({
    timeout: 5000,
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
  });
  iziToast.show({
    maxWidth: '350px',
    message: `${errorMessage}`,
    position: 'topRight',
    backgroundColor: `${bgcolor}`,
  });
}

// creates the image gallery given the jsonData
function createMarkup(jsonData) {
  const contentMarkup = jsonData.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="content-list-item">
            <div class="container-div">
                <a href="${largeImageURL}">
                    <img src="${webformatURL}" alt="${tags}" width="240" height="200">
                </a>
                <div class="content-bottom">
                    <div class="content-bottom-inner">
                        <p><b>Likes</b></p>
                        <p class="stats">${likes}</p></div>
                    <div class="content-bottom-inner">
                        <p><b>Views</b></p>
                        <p class="stats">${views}</p></div>
                    <div class="content-bottom-inner">
                        <p><b>Comments</b></p>
                        <p class="stats">${comments}</p></div>
                    <div class="content-bottom-inner">
                        <p><b>Downloads</b></p>
                        <p class="stats">${downloads}</p></div>
                </div> 
            </div> 
        </li>`
    )
    .join('');

  contentUL.innerHTML += contentMarkup;
  const mylightbox = new SimpleLightbox('.content-list-item a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

async function getData() {
  try {
    const response = await axios.get(baseUrl, { params });
    loader.style.display = 'none';
    loadMore.style.display = 'none';
    totalHits = response.data.totalHits;
    if (totalHits === 0) {
      showError(message1, 'red');
    } 
    else {
      createMarkup(response.data);
      if (params.page < Math.ceil(totalHits / params.per_page)) {
        loadMore.style.display = 'block';
      }
      if (Math.ceil(totalHits / params.per_page) === 1){
        showError(message2, "aqua");
      }
    }
  } catch (error) {
    loader.style.display = 'none';
    showError(error, "purple");
  }
}

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  params.q = searchInput.value;
  params.page = 1;
  // empty the inside of gallery ul
  contentUL.innerHTML = '';
  // lets make the loader visible first
  loader.style.display = 'flex';
  getData();
});

loadMore.addEventListener('click', event => {
  params.page += 1;
  if (params.page >= Math.ceil(totalHits / params.per_page)) {
    getData();
    showError(message2, 'aqua');
    loadMore.style.display = 'none';
  } else {
    getData();
  }
});
