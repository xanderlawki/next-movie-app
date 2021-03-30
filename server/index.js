const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require('express');
const bodyParser = require("body-parser")

const filePath = './data.json'
const fs = require('fs')
const path = require('path')
const moviesData = require(filePath)

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {

  const server = express();
  server.use(bodyParser.json())
//   server.get('/', (req, res) => {
//     return handle(req, res)
//   })

/////READ MOVIES////

    server.get('/api/v1/movies', (req,res)=> {
        res.status(200).json(moviesData)
    })

    server.get('/api/v1/movies/:id', (req,res)=> {
        const {id} = req.params
        const movieID = moviesData.find(m => m.id === id)
         res.status(200).json(movieID)
    })

    /////CREATE MOVIES////
    server.post('/api/v1/movies', (req,res)=> {
        const body = req.body;

        moviesData.push(body)
        const pathToFile = path.join(__dirname, filePath)
        const stringifiedData = JSON.stringify(moviesData, null, 2)

        fs.writeFile(pathToFile, stringifiedData, (err) => {
           if(err) {
            return res.status(400).send(err)
           }
           res.status(200).json({message: 'SUCCESSFULLY ADDED'})
       })
       
    })

    /////UPDATE MOVIES////
    server.patch('/api/v1/movies/:id', (req,res)=> {
        const {id} = req.params
        let body = req.body;
        const movieIndex = moviesData.findIndex(m => m.id === id)
        moviesData[movieIndex] = body
       const pathToFile = path.join(__dirname, filePath)
       const stringifiedData = JSON.stringify(moviesData, null, 2)
   
       fs.writeFile(pathToFile, stringifiedData, (err) => {
         if (err) {
           return res.status(422).send(err)
         }
            res.status(200).json(body)
         })
        
    })

    /////DELETE MOVIES////
    server.delete('/api/v1/movies/:id', (req,res)=> {
        const {id} = req.params
        const MovieIndex = moviesData.findIndex(el => el.id === id)
        moviesData.splice(MovieIndex, 1)

        fs.writeFile(moviesData, JSON.stringify(movies), (err)=> {
            if(err) {
             return res.status(400).send(err)
            }
            res.status(200).json({message: 'SUCCESSFULLY DELETED'})
        })
        
        
    })

  const PORT = process.env.PORT || 3000;

  server.use(handle).listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port ' + PORT)
  })
})