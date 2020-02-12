const provinceData = require('../models').db_province_data;

class provinceDataController{
  static create(req, res) {
    return provinceData
      .create({
        content: req.body.content,
        todoId: req.params.todoId,
      })
      .then(provinceData => res.status(201).send(provinceData))
      .catch(error => res.status(400).send(error));
  }
  static list(req, res) {
    return Todo
      .findAll({
        include: [{
          model: provinceData,
          as: 'provinceDatas',
        }],
      })
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  }

static update(req, res) {
  return provinceData
    .find({
        where: {
          id: req.params.provinceDataId,
          todoId: req.params.todoId,
        },
      })
    .then(provinceData => {
      if (!provinceData) {
        return res.status(404).send({
          message: 'provinceData Not Found',
        });
      }

      return provinceData
        .update({
          content: req.body.content || provinceData.content,
          complete: req.body.complete || provinceData.complete,
        })
        .then(updatedprovinceData => res.status(200).send(updatedprovinceData))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}

static destroy(req, res) {
  return provinceData
    .find({
        where: {
          id: req.params.provinceDataId,
          todoId: req.params.todoId,
        },
      })
    .then(provinceData => {
      if (!provinceData) {
        return res.status(404).send({
          message: 'provinceData Not Found',
        });
      }

      return provinceData
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
  }
}
module.exports =provinceDataController