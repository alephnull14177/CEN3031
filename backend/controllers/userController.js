const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)
    
    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token, isAdmin:user.isAdmin})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.signup(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token, isAdmin:false})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a admin
const signupAdmin = async (req, res) => {
  const {email, password, secret} = req.body

  try {
    const user = await User.adminSignup(email, password, secret)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token, isAdmin:true})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { signupUser, loginUser, signupAdmin }