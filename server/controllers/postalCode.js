// const postalCode = require('../models').db_postal_code_data;
const postalCode = require('../models/db_postal_code_data');
const dbName = 'db_postal_code_data'
const url = require('url');
const querystring = require('querystring');

class postalCodeController {
  static create(req, res) {
    return postalCode
      .create({
        title: req.body.title,
      })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  }
  static list(req, res) {
    postalCode
      .findAll()
      .then(data => res.status(200).send(data))
      .catch(error => res.status(400).send(error));
  }
  static keySearch(req,res){
    res.status(200).send(req.query)
  }

  static retrieve(req, res) {
    return postalCode
      .findById(req.query.keyword, {
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(todo => {
        if (!todo) {
          return res.status(404).send({
            message: 'Todo Not Found',
          });
        }
        return res.status(200).send(todo);
      })
      .catch(error => res.status(400).send(error));
  }
  static update(req, res) {
    return Todo
      .findById(req.params.todoId, {
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(todo => {
        if (!todo) {
          return res.status(404).send({
            message: 'Todo Not Found',
          });
        }
        return todo
          .update({
            title: req.body.title || todo.title,
          })
          .then(() => res.status(200).send(todo))  // Send back the updated todo.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
  static destroy(req, res) {
    return Todo
      .findById(req.params.todoId)
      .then(todo => {
        if (!todo) {
          return res.status(400).send({
            message: 'Todo Not Found',
          });
        } else {
          return todo
            .destroy()
        }
      })
      .then(() => res.status(200).send({ message: 'Todo deleted successfully.' }))
      .catch(error => res.status(400).send(error))
  }
}

module.exports = postalCodeController