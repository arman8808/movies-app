const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const row_movies = document.querySelector(".row-movies");
const getMovies = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  showMovies(data);
};
getMovies(APIURL);
const showMovies = (data) => {
  row_movies.innerHTML = "";
  // <div class="movies">
  //

  //         </div>
  data.results.forEach((result) => {
    const imagePath =
      result.poster_path === null
        ? "img/image-missing.png"
        : IMGPATH + result.poster_path;
    const movie = document.createElement("div");

    movie.classList.add("movies");
    movie.innerHTML = `
    <img src=${imagePath} alt="">
           <div class="overlay">
            <div class="title">
                <h2>${result.original_title
                }</h2>
                <span>${result.vote_average
                }</span>
              </div>
              <h3>OverView</h3>
                <p>
                  ${result.overview
                  }
                </p>

           </div>
    `;
    row_movies.appendChild(movie);
    console.log(result);
  });
};
document.querySelector(".Search_1").addEventListener("keyup",function(event){
  if(event.target.value!=""){
    getMovies(SEARCHAPI+event.target.value)
    
  }
  else{
    getMovies(APIURL)
  }
})