const express = require("express")
const app = express()
const Post = require('../mongoDB/models/post')
const router = express.Router();
const accountPageController = require('../controllers/post-')

router.post('/submit', Post.submitDate);

const submitDate = (req, res) => {
  const date = new POST({
    date: req.body.date
  });
  date.save((error, date) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(date);
    }
  });
};

  

