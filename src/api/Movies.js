import axios from "axios";



const getTopMovies = async ({pageParam}) => {
    //https://api.themoviedb.org/3/movie/top_rated
//https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageParam}`,{
            headers: {
                Accept: 'application/json',
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2FmYTExZTg2NTJhMjRlNzVhOWIxMjdmNGE5YmM4ZSIsIm5iZiI6MTcyMTU4NDkzNS4wNTcwOTcsInN1YiI6IjYxZDliNmMxZTFhZDc5MDA2NTllOTMxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pbP3J9vBuCq8UokBzo4AJX1cmfOGZ2QoQeHwoQ5neMw"
            }
        }); 

        const res = response.data;

        return res.results;
    } 
    
    catch (error) {
        console.log("Failed");
        return {error: "Failed"}
    }   
}


export default getTopMovies;