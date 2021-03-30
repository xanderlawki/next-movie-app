import axios from "axios"
const BASE_URL = `http://localhost:3000`

export const MOVIE_DATA = []
const CATEGORY_DATA = [
  {id: 'c-0', name: 'all'},
  {id: 'c-1', name: 'drama'},
  {id: 'c-2', name: 'action'},
  {id: 'c-3', name: 'adventeru'},
  {id: 'c-4', name: 'historical'},
]





  export const getMovie = async()=> {
     const data = await axios.get(`${BASE_URL}/api/v1/movies`)
     const response = await data.data
      return response
  }

    export const addMovies = async(movies)=> {
      movies.id = Math.random().toString(36).substr(2,7)
      const data =  await axios.post(`${BASE_URL}/api/v1/movies`, movies)
      return data
     
  }

  export const getCategory = ()=> {
    return new Promise ((resolve, reject)=> {
      setTimeout(()=> {
        resolve(CATEGORY_DATA)
        // reject('No Network Connection')
      }, 2000)
    })
}



  export const getMoviebyId = async (id)=> {

    const data = await axios.get(`${BASE_URL}/api/v1/movies/${id}`)
    const response = await data.data
     return response

  }

  export const updateMovies = async (movie)=> {

    const data = await axios.patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie)
    const response = await data.data
     return response

  }

  export const deleteMovie =async (id)=> {
    const data = await axios.delete(`${BASE_URL}/api/v1/movies/${id}`)
    const response = await data.data 
    return response
  }

 