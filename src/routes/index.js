import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let result = `
  Fair Graphql API running on <a href="/graphql">/graphql</a>
  `;
  res.send(result);
});

module.exports = router;