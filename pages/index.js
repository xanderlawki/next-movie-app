
import React, { Component} from 'react'
import styles from '../styles/Home.module.css';

import Sidemenu from '../components/sidebar';
import Carousel from "../components/carousel";
import MovieList from "../components/MovieList";

import {getMovie} from '../action/index'
import {getCategory} from '../action/index'
import {useDispatch} from 'react-redux';



class Home extends Component {
  constructor() {
    super()
    this.state = {
      filter: 'all'
    }
  }
  

    static async getInitialProps() {
      const movies = await getMovie()
      console.log(movies)
      const categories = await getCategory()
      const carousel =  movies.map(movie => {
        return {
          id: `image-${movie.id}`,
          images : movie.cover,
          name: movie.name
        }
      })
      return {
        movies,
        carousel,
        categories
      }
    }
  
     changeCategory = catergory => {
     
      this.setState({filter: catergory})
    }

    filterMovies = movies => {
      if(this.state.filter === 'all') {
        return movies
      }
    return movies.filter(m => m.genre && m.genre.includes(this.state.filter))
    }
  //  componentDidMount () {
  //   const dispatch = useDispatch()
  //   dispatch(getMovie)
  // }
  
  render() {
    const {movies} = this.props
    const {carousel} = this.props
    const {categories} = this.props
    console.log(movies)
    console.log(carousel)
    console.log(categories)
    const appname = 'Movie DB'
    return (
      <div>
  
  <div className="home-page">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
       <Sidemenu appname={appname} categories={categories} changeCategory={this.changeCategory} active={this.state.filter}/>
      </div>
      <div className="col-lg-9">
        <h1>displaying {this.state.filter} movies</h1>
        <Carousel carousel={carousel}/>
        <div className="row">
         
        <MovieList movies={this.filterMovies(movies) || []}/>
        </div>
      </div>
    </div>
  </div>
  </div>
 
  </div> 
    )
  }
// const Home = () => {
//   const [movies, setState] = useState([])
    
//        useEffect(()=> {
//         const fetchData = async ()=> {
//           
//           console.log(setState)
//         }

//         fetchData()
//       }, [])

 
} 
    
  


export default Home