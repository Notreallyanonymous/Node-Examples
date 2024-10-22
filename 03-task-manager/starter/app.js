import express from 'express'
import routes from './routes/routes.js'
import router from './routes/routes.js';

const app = express();
 
//middleware

app.use(express.json())


// routes
// app.get('/api/v1/tasks', (req,res)=>{
//     res.send('Task Manager App')
// })

// app.get('/api/v2/tasks', (req,res)=>{
//     res.send('Task Manager App')
// })

// app.post('/api/v2/tasks', (req,res)=>{
//     res.send('Task Manager App')
// })

// app.get('/hello', (req,res)=>{
//     res.send('Task Manager App')
// })


// app.delete('/hello', (req,res)=>{
//     res.send('Task Manager App')
// })

app.use('/api/v1/tasks' , router)

const port = 3000

app.listen(port, console.log(`server is listening on port ${port}...`))