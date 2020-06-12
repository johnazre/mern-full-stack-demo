const express = require('express')
const router = express.Router()
const User = require('../models/user')
const { create } = require('../models/user')

router.get('/', (req, res) => {
  User.find().then(users => {
    res.json(users)
  })
})

router.post('/', (req, res) => {
  const newUser = new User(req.body)
  newUser.save().then(createdUser => {
    res.json(createdUser)
  })
})

module.exports = router
