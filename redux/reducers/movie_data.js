export default (movie_data=[], action)=> {
    switch(action.type) {
        case 'FETCH_ALL': 
        return movie_data;
        default:
         return movie_data
    }
}