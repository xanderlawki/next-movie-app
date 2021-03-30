    import React, { useState } from 'react'
    

 export  const CreateMovie = (prop)=> {
    console.log(prop)
   
    const defaultData = {
        ame: "",
           description: "",
           rating: "",
           image: "",
           cover: "",
           longDesc: "",
    }

      const FormData = prop.initialProps ? {...prop.initialProps} : defaultData
        const [form, setForm] = useState(FormData)

        

        const handleChange = (event)=> {
            const name = event.target.name
                
            setForm({
                ...form,
                [name]: event.target.value
            })
        }

        const handlegenreChange = (event)=> {
            const {options} = event.target;
            const optionsLength = options.length;
            const value = []
            for(let i = 0; i < optionsLength; i++) {
                if(options[i].selected) {
                    value.push(options[i].value)
                }
            }

            setForm({
                ...form,
                genre: value.toString()
            })

            
        }
        const SubmitForm =()=> {
            prop.handleSubmit({...form})    
               
        }
        return (
    
            <form>
                
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text"
                 className="form-control" 
                 id="name"
                 value={form.name}
                 onChange={handleChange}
                 name="name"
                  aria-describedby="emailHelp"
                   placeholder="Lord of the Rings" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text"
                 className="form-control"
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                   placeholder="Somewhere in Middle-earth..." />
            </div>
            <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <input type="number"
                 max="5"
                  min="0"
                   className="form-control"
                    id="rating" 
                    value={form.rating}
                    name="rating"
                    onChange={handleChange}
                    placeholder="3" />
                <small id="emailHelp" 
                className="form-text text-muted">
                    Max: 5, Min: 0
                     </small>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input type="text"
                 className="form-control"
                  id="image"
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                   placeholder="http://....." />
            </div>
            <div className="form-group">
                <label htmlFor="cover">Cover</label>
                <input type="text"
                 className="form-control"
                 value={form.cover}
                 onChange={handleChange}
                 name="cover"
                  id="cover"
                   placeholder="http://......" />
            </div>
            <div className="form-group">
                <label htmlFor="longDesc">Long Description</label>
                <textarea
                 className="form-control"
                  id="longDesc"
                  name="longDesc"
                  value={form.longDesc}
                  onChange={handleChange}
                   rows="3"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <select
                 multiple className="form-control"
                  id="genre"
                  onChange={handlegenreChange}
                  >
                <option>drama</option>
                <option>music</option>
                <option>adventure</option>
                <option>historical</option>
                <option>action</option>
                </select>
            </div>
            <button onClick={SubmitForm} type="button" className="btn btn-primary">{prop.initialProps ? 'Update' : 'Create'}</button>
            </form>
        )
    }
