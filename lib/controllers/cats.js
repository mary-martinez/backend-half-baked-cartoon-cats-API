const { Router } = require('express');
// const { cats } = require('../../data/cats');
const Cat = require('../models/Cat');


module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const cat = await Cat.getById(id);
    // const cat = cats.find((cat) => cat.id === id);
    res.json(cat);
  })
  .get('/', async (req, res) => {
    const cats_list = await Cat.getAll();
    // const cats_list = cats.map((cat) => ({ id: cat.id, name: cat.name }));
    res.json(cats_list);
  });
