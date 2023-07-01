const express = require('express')
const cors = require('cors')
const connectDB = require('./connection/conn')
const Memory = require('./models/memoryModel')
const Response = require('./models/responseModel')

const app = express()
const port = 8000

connectDB();

app.use(cors())
app.use(express.json())

app.get('/memory', async (req , res) => {
    try{
        const allMemoryData = await Memory.find()
        res.json(allMemoryData)
    }
    catch(err){
        console.error('Failed to retrieve Memory Data' , err);
        res.status(500).json({ error: 'Failed to retrieve Memory Data' });
    }
});

app.get('/response', async (req , res) => {
    try{
        const allResponseData = await Response.find()
        res.json(allResponseData)
    }
    catch(err){
        console.error('Failed to retrieve Response Data' , err);
        res.status(500).json({ error: 'Failed to retrieve Response Data' });
    }
});
app.post('/memory/:name/:email/:score', async (req, res) => {
    try {
      const { name, email, score } = req.params;
      const newMemory = new Memory({ name, email, score });
      await newMemory.save();
      res.sendStatus(200);
    } catch (err) {
      console.error('Failed to save Memory Data:', err);
      res.sendStatus(500);
    }
  });

  app.post('/response/:name/:email/:score', async (req, res) => {
    try {
      const { name, email, score } = req.params;
      const newResponse = new Response({ name, email, score });
      await newResponse.save();
      res.sendStatus(200);
    } catch (err) {
      console.error('Failed to save Response Data:', err);
      res.sendStatus(500);
    }
  });

app.listen(port, (err) => {
    if (err) console.error(err);
    else console.log('Server running on port', port);
  });
  

