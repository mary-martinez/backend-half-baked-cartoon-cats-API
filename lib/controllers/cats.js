const { Router } = require('express');
const { cats } = require('../../data/cats');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const cat = cats.find((cat) => cat.id === id);
    res.json(cat);
  })
  .get('/', (req, res) => {
    const cats_list = cats.map((cat) => ({ id: cat.id, name: cat.name }));
    res.json(cats_list);
  });
