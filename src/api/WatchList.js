import axios from "axios";



export const addToWatchList = async (movieId) => {

  const url = 'https://api.themoviedb.org/3/account/11721421/watchlist';
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2FmYTExZTg2NTJhMjRlNzVhOWIxMjdmNGE5YmM4ZSIsIm5iZiI6MTcyMTU4NDkzNS4wNTcwOTcsInN1YiI6IjYxZDliNmMxZTFhZDc5MDA2NTllOTMxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pbP3J9vBuCq8UokBzo4AJX1cmfOGZ2QoQeHwoQ5neMw'
    },
    body: JSON.stringify({ media_type: 'movie', media_id: movieId, watchlist: true })
  };

  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));

};


export const getWatchListMovies = async () => {

  try {
    const response = await axios.get("https://api.themoviedb.org/3/account/11721421/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc", {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2FmYTExZTg2NTJhMjRlNzVhOWIxMjdmNGE5YmM4ZSIsIm5iZiI6MTcyMTU4NDkzNS4wNTcwOTcsInN1YiI6IjYxZDliNmMxZTFhZDc5MDA2NTllOTMxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pbP3J9vBuCq8UokBzo4AJX1cmfOGZ2QoQeHwoQ5neMw'
      }
    });

    const res = response.data;

    return res.results;
  }

  catch (error) {
    console.log("Failed");
  }
};




/*
  try {
    const response =  await axios.post("https://10.0.2.2//api.themoviedb.org/3/account/11721421/watchlist", {
          headers: {
              Accept: 'application/json',
              'content-type': 'application/json',
              Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2FmYTExZTg2NTJhMjRlNzVhOWIxMjdmNGE5YmM4ZSIsIm5iZiI6MTcyMTU4NDkzNS4wNTcwOTcsInN1YiI6IjYxZDliNmMxZTFhZDc5MDA2NTllOTMxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pbP3J9vBuCq8UokBzo4AJX1cmfOGZ2QoQeHwoQ5neMw"
          },

          body:JSON.stringify ({
              media_type: 'movie',
              media_id: movieId,
              watchlist: true
          })
      },
      );
      const json = response.json();
      console.log(json);
      return json;
  }

  catch (error) {
     console.log(error);
  }*/
