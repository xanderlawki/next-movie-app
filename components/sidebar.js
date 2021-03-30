import React from 'react';
import Modal from './modal';
import {CreateMovie} from './createMovie';
import {addMovies} from '../action/index';
import {useRouter} from 'next/router'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';




const Sidemenu = ({appname, categories, changeCategory, active})=> {
  let modal = null;
  let router = useRouter()
  const handleCreateForm = async(movie)=> {
   const movies = await addMovies(movie)
   modal.closeModal()
   router.push('/')
  }
    return (
        <div>
          <Modal ref={ele => modal = ele} hasSubmit={false}>
            <CreateMovie handleSubmit={handleCreateForm}/>
          </Modal  >
        <h1 className="my-4">{appname}</h1>
        <div className="list-group">
          {
            categories.map(el => (
              <a onClick={()=> changeCategory(el.name)} href="#" key={el.id} className={`list-group-item ${active === el.name ? 'active' : ''} `}>{el.name}</a>
            ))
          }
          
          
        </div>
        </div>
    )
}

export default Sidemenu