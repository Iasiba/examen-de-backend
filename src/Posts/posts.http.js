const postsController = require("./posts.controllers");

const getAll = (req, res) => {
  postsController
    .getAll()
    .then((response) => {
      res.status(200).json({ items: response.length, posts: response });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getById = (req, res) => {
  const id = req.params.id;
  postsController
    .getById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `post with id ${id} not exist` });
    });
}

const create = (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ message: "Missing Data"});
  } else if (
    !data.description||
    !data.userId
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        description: "description",
        userId: "userId"
      },
    });
  } else {
    postsController.create(data)
      .then((response) => {
        res.status(201).json({
          message: `post created succesfully with id: ${response.id}`,
          post: response,
        });
      })
      .catch(err => {
        res.status(400).json({message: err.errors[0].message})
      }) 
  }
};
const getByUserId = (req, res) => {
  const userId = req.user.id
  postsController
    .getByUserId(userId)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `post with userId ${userId} not exist` });
    });
}
const remove = (req, res) => {
  const id = req.params.id;
  postsController.remove(id)
    .then((response) => {
      if(response){
        res.status(204).json({message:response})
      }else{
        res.status(400).json({
          message: 'Invalid ID'
        })
      }
    })
};

const edit = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  if (!Object.keys(data).length) {
    return res.status(400).json({ message: "Missing Data" });
  } else {
    postsController.edit(id, data, req.user.rol)
      .then((response) => {
        res.status(200).json({
          message: 'post edited succesfully',
          post: response
        })
      })
      .catch((err) => {
        res.status(400).json({message: err.errors[0].message})
      })
  }
};

module.exports = {
  getAll,
  create,
  getById,
  remove,
  edit,
  getByUserId
};
