const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', async function(){

  // Menangani error handling
  try {
    const searchInput = document.getElementById('search');
    const movie = await getMovie(searchInput.value);
    updateUi(movie);
  } catch (error) {
    if (error.message === 'Movie not found.') {
      alert('Movie not found.');
    } else if (error.message === 'Invalid API key.') {
      alert('Invalid API key. Please check your API key.');
    } else {
      console.log(error);
    }
  }
});

async function getMovie(movie) {
  const response = await fetch(`https://www.omdbapi.com/?apikey=6ae82e58&s=${movie}`);
  
  // Mengecek apakah API key valid
  if (response.status === 401) {
    throw new Error('Invalid API key.');
  }
  
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  // Mengecek apakah film ditemukan
  if (data.Response === 'False') {
    throw new Error('Movie not found.');
  }

  return data.Search;
}

function updateUi(movies) {
  const movieCard = document.querySelector('.container .card');
  let card = '';
  movies.forEach((movie) => {
    card += showcard(movie);
  });
  movieCard.innerHTML = card;
}

// Event listener untuk tombol View Details
document.addEventListener('click', async function(e){
  if (e.target.classList.contains('view-details')) {
    try {
      const movieId = e.target.getAttribute('data-idd');
      const movieDetail = await getMovieDetail(movieId);
      showModal(movieDetail);
    } catch (error) {
      alert('Failed to retrieve movie details.');
      console.log(error);
    }
  }

  if (e.target.id === 'closeModal') {
    document.getElementById('movieDetailModal').classList.add('hidden');
  }
});

async function getMovieDetail(movieId) {
  const response = await fetch(`https://www.omdbapi.com/?apikey=6ae82e58&i=${movieId}`);
  
  // Mengecek apakah API key valid
  if (response.status === 401) {
    throw new Error('Invalid API key.');
  }

  const data = await response.json();

  if (!response.ok || data.Response === 'False') {
    throw new Error('Movie not found.');
  }

  return data;
}

function showcard(movie) {
  return `
  <div class="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
        <div class="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <div class="w-full h-48 bg-gray-200">
            <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}" alt="${movie.Title} Poster" class="w-full h-full object-cover">
          </div>
          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">${movie.Title}</h2>
            <p class="text-gray-600">Year: ${movie.Year}</p>
            <button class="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md view-details" data-title="${movie.Title}" data-year="" data-idd="${movie.imdbID}">View Details</button>
          </div>
        </div>
      </div>
  `;
}

function showModal(movie) {
  const modalContent = `
  <div class="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
      <h2 id="modalTitle" class="text-xl font-bold mb-4">${movie.Title}</h2>
      <img
        id="modalPoster"
        src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}"
        alt="Movie Poster"
        class="w-full h-64 object-cover mb-4"
      />
      <p id="modalYear" class="text-gray-700">Year: ${movie.Year}</p>
      <p id="modalPlot" class="text-gray-700 mt-2">Plot: ${movie.Plot}</p>
      <button
        id="closeModal"
        class="bg-red-500 text-white px-4 py-2 mt-4 rounded-md"
      >
        Close
      </button>
    </div>
  `;
  document.getElementById('movieDetailModal').innerHTML = modalContent;
  document.getElementById('movieDetailModal').classList.remove('hidden');
}