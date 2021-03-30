
import {useRouter} from 'next/router';
import {getMoviebyId, deleteMovie, updateMovies} from '../../../action/index'
import Link from 'next/link'


const Movie = (props)=> {
    const router = useRouter();

    const {id} = router.query;
    const {result} = props
    console.log(result)
   const handleDelete = async(id)=> {
   const data = await deleteMovie(id)
   const response = await data.data
   router.push('/')
   }

    
   
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">{result.name}</h1>
                <p className="lead">{result.description}</p>
                <hr className="my-4"/>
                <p>{result.genre}</p>
                <button className="btn btn-primary btn-lg mr-1" href="#" role="button">Learn more</button>
                <button onClick={()=>handleDelete(id)} className="btn btn-danger btn-lg  mr-1" href="#" role="button">Delete</button>
                <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
                <button  className="btn btn-warning btn-lg" href="#" role="button">Edit</button>
                </Link>
                </div>
                 <p className="desc-text">{result.longDesc}</p>
                 <style jsx> {`
                  .desc-text {
                      font-size: 21px;
                  }
                  `}
                 </style>
             </div>
            
    
    )
}


Movie.getInitialProps = async ({query})=> {
    const result = await getMoviebyId(query.id)
    
    return {
        result
    }
}
 
export default Movie