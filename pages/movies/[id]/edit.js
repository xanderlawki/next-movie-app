import React, {Component} from 'react';
import {useRouter} from 'next/router'

import {CreateMovie} from '../../../components/createMovie'
import {getMoviebyId, updateMovies} from '../../../action/index'
import Router from 'next/router';



class EditMovie extends Component {

   static async getInitialProps ({query}) {
     const movie = await getMoviebyId(query.id)
     console.log(movie)
     return {
       movie,
     }
    }

    handleUpdateMovie = async(movie)=> {
      const movies = await updateMovies(movie)
    
      Router.push(`/movies/[id]`,`/movies/${movies.id}`)
     }
  
   
  
    // componentDidMount() {
    //   const { id } = this.props.query
    //   getMoviebyId(id).then(movie => {
    //     this.setState({movie})
    //   })
    // }
  
  
    render() {
        const {movie} = this.props
      return (
        <div className="container">
          <h1>Edit the Movie</h1>
          <CreateMovie initialProps={movie} handleSubmit={this.handleUpdateMovie}/>
        </div>
      )
    }
  }
  
  
  export default EditMovie