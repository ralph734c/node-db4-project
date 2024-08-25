const recipesModel = require('./recipes-model');
const recipesMiddleware = require('./recipes-middleware');

const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    res.json({message: `The ${req.method} is working to ${req.path}`})
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    res.json({message: `The ${req.method} is working to ${req.path}`})
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    res.json({message: `The ${req.method} is working to ${req.path}`})
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    res.json({message: `The ${req.method} is working to ${req.path}`})
  } catch (error) {
    next(error)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    res.json({message: `The ${req.method} is working to ${req.path}`})
  } catch (error) {
    next(error)
  }
})

router.use((error, req, res, next) => { // eslint-disable-line
  res.status(error.status || 500).json({
    message: error.message,
  });
});

module.exports = router;