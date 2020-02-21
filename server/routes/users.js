const express = require('express')
const User = require('../models/User')

const router = express.Router()

router.get('/', async (req, res) => {
  const users = await User.find()
  res.json(users)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const user = await User.findById(id)
  res.json(user)
})

router.post('/', async (req, res) => {
  const user = await User.create(req.body)
  res.json(user)
})

router.patch('/:id', async (req, res) => {
  const { id } = req.params
  const user = await User.findByIdAndUpdate(id, req.body, { new: true })
  res.json(user)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const user = await User.findByIdAndDelete(id)
  res.json(user)
})

router.delete('/', async (req, res) => {
  try {
    await User.deleteMany()
  } catch (error) {
    res.status(500).json(error)
    return
  }
  res.status(200).end()
})

module.exports = router

/* import from flashcards-react-complete

router.get('/refill', async (req, res) => {
  try {
    await Card.create(require('../cards.json'))
  } catch (error) {
    res.status(400).json(error)
    return
  }
  res.status(200).end()
})

router.delete('/', async (req, res) => {
  try {
    await Card.deleteMany()
  } catch (error) {
    res.status(500).json(error)
    return
  }
  res.status(200).end()
})

router.get('/', async (req, res) => {
  const cards = await Card.find()
  res.json(cards)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const card = await Card.findById(id)
  res.json(card)
})

router.post('/', async (req, res) => {
  const card = await Card.create(req.body)
  res.json(card)
})

router.patch('/:id', async (req, res) => {
  const { id } = req.params
  const card = await Card.findByIdAndUpdate(id, req.body, { new: true })
  res.json(card)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const card = await Card.findByIdAndDelete(id)
  res.json(card)
})

module.exports = router


*/
