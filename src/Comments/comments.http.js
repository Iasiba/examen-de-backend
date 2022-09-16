const commentsController = require("./comments.controllers");

const getAll = (req, res) => {
  commentsController
    .getAll()
    .then((response) => {
      res.status(200).json({ items: response.length, comments: response });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getAllByPostId = (req, res) => {
  const id = req.params.postid;
  commentsController
    .getAllByPostId(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `comments with id ${id} not exist` });
    });
}

const create = (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ message: "Missing Data"});
  } else if (
    !data.text||
    !data.userId||
    !data.postid
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        text: "text",
        userId: "userId",
        postid: "postid"
      },
    });
  } else {
    commentsController.create(data)
      .then((response) => {
        res.status(201).json({
          message: `comment created succesfully with id: ${response.id}`,
          post: response,
        });
      })
      .catch(err => {
        res.status(400).json({message: err.errors[0].message})
      }) 
  }
}

module.exports = {
  getAll,
  create,
  getAllByPostId
};
